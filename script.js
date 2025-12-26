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

  // Check if #ans already exists
  let ansCell = document.querySelector("#ans");

  if (!ansCell) {
    const row = document.createElement("tr");
    ansCell = document.createElement("td");

    ansCell.id = "ans";
    ansCell.colSpan = 2;

    row.appendChild(ansCell);
    table.appendChild(row);
  }

  ansCell.innerText = total;
};

getSumBtn.addEventListener("click", getSum);




