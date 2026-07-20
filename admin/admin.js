document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('panel-' + btn.dataset.tab).classList.add('active');
  });
});

function renderTable(tableEl, rows, columns){
  if(!rows || rows.length === 0){
    tableEl.innerHTML = '<tr><td class="empty">কোনো ডেটা নেই</td></tr>';
    return;
  }
  const headerHtml = '<tr>' + columns.map(c => `<th>${c.label}</th>`).join('') + '</tr>';
  const bodyHtml = rows.map(row => '<tr>' + columns.map(c => {
    let val = row[c.key];
    if(c.key === 'image_path' && val){
      return `<td><img class="thumb" src="${val}" alt="proof"></td>`;
    }
    if(val === null || val === undefined) val = '—';
    return `<td>${val}</td>`;
  }).join('') + '</tr>').join('');
  tableEl.innerHTML = headerHtml + bodyHtml;
}

async function loadData(){
  try{
    const res = await fetch('/admin/data');
    const data = await res.json();

    if(!data.success){
      document.getElementById('loading').textContent = 'ডেটা লোড করতে সমস্যা হয়েছে';
      return;
    }

    document.getElementById('loading').style.display = 'none';

    document.getElementById('count-users').textContent = data.users.length;
    document.getElementById('count-orders').textContent = data.orders.length;
    document.getElementById('count-complaints').textContent = data.complaints.length;

    renderTable(document.getElementById('table-users'), data.users, [
      { key:'id', label:'ID' },
      { key:'name', label:'নাম' },
      { key:'email', label:'ইমেইল' },
      { key:'created_at', label:'তারিখ' }
    ]);

    renderTable(document.getElementById('table-orders'), data.orders, [
      { key:'id', label:'ID' },
      { key:'product_name', label:'প্রোডাক্ট' },
      { key:'category', label:'ক্যাটাগরি' },
      { key:'price', label:'দাম' },
      { key:'quantity', label:'পরিমাণ' },
      { key:'market', label:'মার্কেট' },
      { key:'delivery_address', label:'ঠিকানা' },
      { key:'phone', label:'ফোন' },
      { key:'note', label:'নোট' },
      { key:'status', label:'স্ট্যাটাস' },
      { key:'order_group', label:'অর্ডার গ্রুপ' },
      { key:'created_at', label:'তারিখ' }
    ]);

    renderTable(document.getElementById('table-complaints'), data.complaints, [
      { key:'id', label:'ID' },
      { key:'product_name', label:'প্রোডাক্ট' },
      { key:'complaint_type', label:'ধরন' },
      { key:'description', label:'বিবরণ' },
      { key:'image_path', label:'ছবি' },
      { key:'status', label:'স্ট্যাটাস' },
      { key:'created_at', label:'তারিখ' }
    ]);

  } catch(err){
    console.error(err);
    document.getElementById('loading').textContent = 'সার্ভারে সংযোগ করা যায়নি';
  }
}

loadData();