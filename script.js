const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach((p) => {
    total += Number(p.innerText);
  });

  const table = document.querySelector("table");

  // Avoid duplicate total row
  let totalRow = document.querySelector(".total-row");
  if (!totalRow) {
    totalRow = document.createElement("tr");
    totalRow.className = "total-row";

    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.className = "total-value";

    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
  }

  document.querySelector(".total-value").innerText =
    "Total Price: Rs " + total;
};

getSumBtn.addEventListener("click", getSum);




