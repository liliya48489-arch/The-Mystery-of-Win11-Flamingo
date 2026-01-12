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
    // 修复：trim加括号，获取并清理输入内容
    const inputUser = usernameInput.value.trim(); 
    const inputPwd = passwordInput.value.trim();

    // 拆分判断：账号/密码是否分别正确
    const isUserRight = inputUser === CORRECT_USER;
    const isPwdRight = inputPwd === CORRECT_PWD;

    // 验证账号密码
    if (isUserRight && isPwdRight) {
      // 登录成功：隐藏登录界面，显示主界面
      loginScreen.classList.remove('active');
      win11Screen.classList.add('active');
      // 双重保险：强制设置display
      loginScreen.style.display = 'none';
      win11Screen.style.display = 'block';
    } else {
      // 不同错误场景显示不同提示
      let errorTip = '';
      if (!isUserRight && !isPwdRight) {
        // 账号密码全错 → 显示长提示
        errorTip = "账号或密码错误！（2025年9月18日，这是我入职的第一天，根据之前的交接信息，这台电脑之前使用的同事叫韩火火，因业绩不理想且态度不端正被公司辞退，其他同事说她已经干了很多年了，一次谈话和老板拍桌摔椅后，提着包就直接走了，第二天也没有来。但人事说韩火火在6月6日接手芝麻大了平台，正式运营西瓜小小1店，连续三个月没有出一单，经上级商议决定才辞退她。）TIPS：注意下名字和时间哦(◍•ᴗ•◍)~";
      } else if (!isUserRight) {
        // 仅账号错误 → 提示“现在使用的是谁的电脑”
        errorTip = "账号错误！提示：电脑之前的使用者";
      } else {
        // 仅密码错误 → 提示“接手平台的年月日”
        errorTip = "密码错误！提示：接手平台的年月日";
      }
      // 弹出对应提示
      alert(errorTip);
      // 清空密码框（保留账号，方便用户修改）
      passwordInput.value = "";
    }
  }

  // 4. 绑定登录事件（点击按钮+密码框回车）
  loginBtn.addEventListener('click', handleLogin);
  passwordInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') handleLogin();
  });
});