    // "회원관리" 버튼을 클릭하면 로그인 페이지 표시
    document.getElementById("showLogin").addEventListener("click", function() {
		document.getElementById("registerForm").style.display = "none";
        document.getElementById("homeSection").style.display = "none";
        document.getElementById("loginSection").style.display = "block";
		document.getElementById("watermelonCakeDetail").style.display = "none";
    });

    // "홈" 버튼을 클릭하면 홈 화면 표시
    document.getElementById("showHome").addEventListener("click", function() {
		document.getElementById("loginSection").style.display = "none";
		document.getElementById("registerForm").style.display = "none";
		document.getElementById("homeSection").style.display = "block";
		document.getElementById("watermelonCakeDetail").style.display = "none";
	});

    // **로고를 클릭하면 홈 화면으로 이동**
    document.getElementById("logo").addEventListener("click", function() {
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("registerForm").style.display = "none";
        document.getElementById("homeSection").style.display = "block";
		document.getElementById("watermelonCakeDetail").style.display = "none";
    });

    // "회원가입" 버튼을 클릭하면 회원가입 폼 표시
    document.getElementById("showRegister").addEventListener("click", function() {
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("registerForm").style.display = "block";
    });

    // "로그인" 버튼을 클릭하면 로그인 폼 다시 표시
    document.getElementById("showLoginAgain").addEventListener("click", function() {
        document.getElementById("registerForm").style.display = "none";
        document.getElementById("loginSection").style.display = "block";
    });
    function showHomeSection() {
        // 홈 화면 보이기
        document.getElementById("homeSection").style.display = "block";
        // 돔형 맞춤 케이크 상세 페이지 숨기기
        document.getElementById("watermelonCakeDetail").style.display = "none";
    }
    
// 더보기 버튼
    document.addEventListener("DOMContentLoaded", function () {
        const moreCakes = document.getElementById("moreCakes");
        const loadMoreBtn = document.getElementById("loadMoreBtn");
    
        loadMoreBtn.addEventListener("click", function () {
            if (moreCakes.classList.contains("show")) {
                moreCakes.classList.remove("show");
                loadMoreBtn.textContent = "더보기";
            } else {
                moreCakes.classList.add("show");
                loadMoreBtn.textContent = "닫기";
            }
        });
    });