import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCCAXnijHhjx5iEDhXexJEfiGkSlZmJggc",
  authDomain: "sql-database-testing.firebaseapp.com",
  databaseURL: "https://sql-database-testing-default-rtdb.firebaseio.com",
  projectId: "sql-database-testing",
  storageBucket: "sql-database-testing.firebasestorage.app",
  messagingSenderId: "75902683800",
  appId: "1:75902683800:web:d88ea709acd239114a9eed",
  measurementId: "G-1CZS6X7X85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const form = document.getElementById('data-form');
const labelInput = document.getElementById('label-input');
const valueInput = document.getElementById('value-input');
const ctx = document.getElementById('data-chart').getContext('2d');

let chart;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const label = labelInput.value.trim();
  const value = parseFloat(valueInput.value);
  if (label && !isNaN(value)) {
    push(ref(database, 'data'), { label, value });
    labelInput.value = '';
    valueInput.value = '';
  }
});

function createChart(labels, data) {
  if (chart) {
    chart.destroy();
  }
  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Values',
        data: data,
        backgroundColor: 'rgba(54, 162, 235, 0.7)'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

onValue(ref(database, 'data'), (snapshot) => {
  const data = snapshot.val();
  if (data) {
    const labels = [];
    const values = [];
    Object.values(data).forEach(item => {
      labels.push(item.label);
      values.push(item.value);
    });
    createChart(labels, values);
  } else {
    createChart([], []);
  }
});
