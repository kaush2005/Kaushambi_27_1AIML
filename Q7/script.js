async function getUniversity() {
    const country = document.getElementById('countryInput').value.trim();
    const status = document.getElementById('statusMessage');
    const table = document.getElementById('universityTable');
    const tbody = document.getElementById('universityList');
    tbody.replaceChildren();
    table.style.display = 'none';
    if (!country) { status.textContent = 'Please enter a country name.'; status.style.color = 'red'; return; }
    status.textContent = 'Searching...'; status.style.color = '#333';
    try {
        const response = await fetch(`https://universities.hipolabs.com/search?country=${encodeURIComponent(country)}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        status.textContent = `Found ${data.length} universities in ${country}.`;
        status.style.color = data.length ? 'green' : 'red';
        data.forEach((uni, index) => {
            const row = document.createElement('tr');
            const values = [String(index + 1), uni.name || 'N/A', uni['state-province'] || 'N/A'];
            values.forEach(value => { const cell = document.createElement('td'); cell.textContent = value; row.appendChild(cell); });
            const websiteCell = document.createElement('td');
            const url = Array.isArray(uni.web_pages) ? uni.web_pages[0] : '';
            if (url) {
                try { const parsed = new URL(url); if (['http:', 'https:'].includes(parsed.protocol)) { const link = document.createElement('a'); link.href = parsed.href; link.textContent = parsed.href; link.target = '_blank'; link.rel = 'noopener noreferrer'; websiteCell.appendChild(link); } else websiteCell.textContent = 'N/A'; } catch { websiteCell.textContent = 'N/A'; }
            } else websiteCell.textContent = 'N/A';
            row.appendChild(websiteCell); tbody.appendChild(row);
        });
        if (data.length) table.style.display = 'table';
    } catch (error) { console.error(error); status.textContent = 'Unable to fetch universities. Please try again.'; status.style.color = 'red'; }
}
