/* . break

Purpose: Immediately exit the nearest loop or switch statement.

Stops further iterations or case execution. */

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // Exit loop when i is 3
    }
    console.log(i); 
}
    // 1 2


/* 2. continue

Purpose: Skip the current iteration of a loop and move to the next iteration.

Works only inside loops (for, while, do...while).*/

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skip printing 3
    }
    console.log(i);
}
/*1
2
4
5
 */
