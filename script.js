const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price cells
  const prices = document.querySelectorAll(".price");

  let total = 0;

  // Calculate total
  prices.forEach((price) => {
    total += Number(price.innerText);
  });

  const table = document.querySelector("table");

  // Prevent adding multiple total rows
  if (document.querySelector(".total-row")) {
    document.querySelector(".total-value").innerText = total;
    return;
  }

  // Create new row
  const totalRow = document.createElement("tr");
  totalRow.className = "total-row";

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.className = "total-value";
  totalCell.innerText = `Total Price: Rs ${total}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);


