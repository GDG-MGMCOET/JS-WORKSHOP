/*<div id="container">
  <p id="target">Target Element</p>
</div>*/

// const container = document.getElementById("container");
// const target = document.getElementById("target");

// // create new elements
// const a = document.createElement("div");
// a.textContent = "Appended inside (at end)";
// const b = document.createElement("div");
// b.textContent = "Prepended inside (at start)";
// const c = document.createElement("div");
// c.textContent = "After target (outside)";
// const d = document.createElement("div");
// d.textContent = "Before target (outside)";
// const e = document.createElement("div");
// e.textContent = "Inserted using insertAdjacentElement";

// // now perform the tricks
// container.append(a);          // inside container, at the end
// container.prepend(b);         // inside container, at the start
// target.after(c);              // outside target, just after it
// target.before(d);             // outside target, just before it
// target.insertAdjacentElement("afterend", e);  // another outside insert

// // remove one for drama
// setTimeout(() => {
//   c.remove(); // removes the "after target" element
// }, 2000);
