let k=6;

for (var i = 0; i < k; i++) {
    document.write('<tr><td>' + project+'k' + '</td><td>' + k + '</td><td>' + k + '</td></tr>');
  }

for (var { jobtitle, employer, salary } of jobs) {
    document.write('<tr><td>' + jobtitle + '</td><td>' + employer + '</td><td>' + salary + '</td></tr>');
  }

for (var { jobtitle, employer, salary } of jobs) {
    document.write(`
      <tr>
        <td>${jobtitle}</td><td>${employer}</td><td>${salary}</td>
      </tr>
    `);
  }