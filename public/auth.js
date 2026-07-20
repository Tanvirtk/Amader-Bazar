/* =======================================================
   LOGIN / SIGNUP PAGE LOGIC (শুধু index.html এর জন্য)
======================================================= */

/* ===== ট্যাব সুইচার (লগইন <-> সাইনআপ) ===== */
const tabLoginBtn = document.getElementById('tabLoginBtn');
const tabSignupBtn = document.getElementById('tabSignupBtn');
const loginPanel = document.getElementById('loginPanel');
const signupPanel = document.getElementById('signupPanel');
const goSignup = document.getElementById('goSignup');
const goLogin = document.getElementById('goLogin');
const tabIndicator = document.querySelector('.tab-indicator');

// সবুজ indicator টাকে active বাটনের ঠিক নিচে/পেছনে নিয়ে যায় (pixel হিসেব করে, তাই CSS যাই হোক কাজ করবে)
function moveIndicator(activeBtn){
  if(!tabIndicator) return;
  tabIndicator.style.position = 'absolute';
  tabIndicator.style.transition = 'left 0.25s ease, width 0.25s ease';
  tabIndicator.style.width = activeBtn.offsetWidth + 'px';
  tabIndicator.style.left = activeBtn.offsetLeft + 'px';
}

function showLogin(){
  tabLoginBtn.classList.add('active');
  tabSignupBtn.classList.remove('active');
  loginPanel.classList.add('active');
  signupPanel.classList.remove('active');
  moveIndicator(tabLoginBtn);
}
function showSignup(){
  tabSignupBtn.classList.add('active');
  tabLoginBtn.classList.remove('active');
  signupPanel.classList.add('active');
  loginPanel.classList.remove('active');
  moveIndicator(tabSignupBtn);
}

// পেজ লোড হওয়ার সাথে সাথে indicator সঠিক জায়গায় বসানো
// indicator absolute পজিশনিং ঠিকমতো কাজ করার জন্য parent container relative হতে হবে
const tabsContainer = document.getElementById('tabs');
if(tabsContainer) tabsContainer.style.position = 'relative';

window.addEventListener('load', ()=> moveIndicator(tabLoginBtn));

tabLoginBtn.addEventListener('click', showLogin);
tabSignupBtn.addEventListener('click', showSignup);
goSignup.addEventListener('click', showSignup);
goLogin.addEventListener('click', showLogin);

/* ===== ছোট হেল্পার: status মেসেজ দেখানো ===== */
function setStatus(el, message, isError){
  el.textContent = message;
  el.style.color = isError ? '#C1440E' : '#1F5D50';
}

/* ===== LOGIN ফর্ম সাবমিট ===== */
document.getElementById('loginForm').addEventListener('submit', async (e)=>{
  e.preventDefault();

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const statusEl = document.getElementById('loginStatus');
  const submitBtn = e.target.querySelector('.submit-btn');

  if(!email || !password){
    setStatus(statusEl, 'ইমেইল আর পাসওয়ার্ড দুটোই দিতে হবে', true);
    return;
  }

  submitBtn.disabled = true;
  setStatus(statusEl, 'লগইন হচ্ছে...', false);

  try{
    const res = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();

    if(data.success){
      setStatus(statusEl, '✅ লগইন সফল! নিয়ে যাচ্ছি...', false);
      setTimeout(()=>{ window.location.href = '/Home.html'; }, 600);
    } else {
      setStatus(statusEl, '❌ ' + data.message, true);
    }
  } catch(err){
    console.error('Login error:', err);
    setStatus(statusEl, '❌ সার্ভারে সংযোগ করা যায়নি', true);
  } finally{
    submitBtn.disabled = false;
  }
});

/* ===== SIGNUP ফর্ম সাবমিট ===== */
document.getElementById('signupForm').addEventListener('submit', async (e)=>{
  e.preventDefault();

  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  const agreeTerms = document.getElementById('agreeTerms').checked;
  const statusEl = document.getElementById('signupStatus');
  const submitBtn = e.target.querySelector('.submit-btn');

  if(!name || !email || !password){
    setStatus(statusEl, 'সব ঘর পূরণ করো', true);
    return;
  }
  if(password.length < 6){
    setStatus(statusEl, 'পাসওয়ার্ড কমপক্ষে ৬ ক্যারেক্টার হতে হবে', true);
    return;
  }
  if(!agreeTerms){
    setStatus(statusEl, 'Terms এ agree করতে হবে', true);
    return;
  }

  submitBtn.disabled = true;
  setStatus(statusEl, 'অ্যাকাউন্ট তৈরি হচ্ছে...', false);

  try{
    const res = await fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    const data = await res.json();

    if(data.success){
      setStatus(statusEl, '✅ ' + data.message + ' — এখন লগইন করো', false);
      e.target.reset();
      setTimeout(showLogin, 1000);
    } else {
      setStatus(statusEl, '❌ ' + data.message, true);
    }
  } catch(err){
    console.error('Signup error:', err);
    setStatus(statusEl, '❌ সার্ভারে সংযোগ করা যায়নি', true);
  } finally{
    submitBtn.disabled = false;
  }
});