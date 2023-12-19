import { from, timer } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { switchMap } from "rxjs/operators";

/* fromFetch("https://jsonplaceholder.typicode.com/todos/1")
  .pipe(
    switchMap((response) => {
      return response.json();
    })
  )
  .subscribe({
    error: console.error,
    next: (result) => console.log(result),
    complete: console.log,
  }); */

timer(1000)
  .pipe(
    switchMap(() =>
      from([
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2",
      ]).pipe(
        switchMap((url) =>
          fetch(url)
            .then((res) => res.json())
            .then((res) => console.log(res))
        )
      )
    )
  )
  .subscribe({
    error: console.error,
    complete: () => console.log("done"),
  });
