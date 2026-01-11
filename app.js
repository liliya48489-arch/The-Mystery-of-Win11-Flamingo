// 等待页面所有元素加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 1. 获取界面元素（确保ID和HTML完全一致）
  const loginScreen = document.getElementById('login-screen');
  const win11Screen = document.getElementById('win11-screen');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const loginBtn = document.getElementById('login-btn');

  // 2. 预设正确的账号密码
  const CORRECT_USER = '韩火火';
  const CORRECT_PWD = '20250606';

  // 3. 登录验证+界面切换函数
function handleLogin(){
  // 1. 修复：trim加括号，调用方法
  const inputUser = usernameInput.value.trim(); // 注意变量名是usernameInput（去掉多余的l）
  const inputPwd = passwordInput.value.trim();

  // 验证账号密码
  if (inputUser === CORRECT_USER && inputPwd === CORRECT_PWD) {
    // 登录成功：隐藏登录界面，显示主界面
    loginScreen.classList.remove('active');
    win11Screen.classList.add('active');
    // 双重保险：强制设置display
    loginScreen.style.display = 'none';
    win11Screen.style.display = 'block';
  } else {
    // alert内容长不影响弹出，只是会自动换行
    alert("账号或密码错误！（2025年9月18日，这是我入职的第一天，根据之前的交接信息，这台电脑之前使用的同事叫韩火火，因业绩不理想且态度不端正被公司辞退，其他同事说她已经干了很多年了，一次谈话和老板拍桌摔椅后，提着包就直接走了，第二天也没有来。但人事说韩火火在6月6日接手芝麻大了平台，正式运营西瓜小小1店，连续三个月没有出一单，经上级商议决定才辞退她。）TIPS：注意下名字和时间哦(◍•ᴗ•◍)~");
    passwordInput.value = "";
  }
}

  // 4. 绑定登录事件（点击按钮+密码框回车）
  loginBtn.addEventListener('click', handleLogin);
  passwordInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') handleLogin();
  });
});