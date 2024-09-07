import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world!");

// 註冊登入頁 眼睛顯示
$("#inputPassword1").click(function () {
  $("#checkEye1").removeClass("d-none");
  $("#checkEye1").addClass("d-block");
});

$("#inputPassword2").click(function () {
  $("#checkEye2").removeClass("d-none");
  $("#checkEye2").addClass("d-block");
});

$("#inputPassword3").click(function () {
  $("#checkEye3").removeClass("d-none");
  $("#checkEye3").addClass("d-block");
});

// 註冊登入頁 密碼顯示
$("#checkEye1").click(function () {
  if ($(this).hasClass("check-eye-close")) {
    $("#inputPassword1").attr("type", "text");
    $(this).attr("src", "/assets/images/icons/ic_eye-open.png");
  } else {
    $("#inputPassword1").attr("type", "password");
    $(this).attr("src", "/assets/images/icons/ic_eye_close.png");
  }

  $(this).toggleClass("check-eye-close").toggleClass("check-eye-open");
});

$("#checkEye2").click(function () {
  if ($(this).hasClass("check-eye-close")) {
    $("#inputPassword2").attr("type", "text");
    $(this).attr("src", "/assets/images/icons/ic_eye-open.png");
  } else {
    $("#inputPassword2").attr("type", "password");
    $(this).attr("src", "/assets/images/icons/ic_eye_close.png");
  }

  $(this).toggleClass("check-eye-close").toggleClass("check-eye-open");
});

$("#checkEye3").click(function () {
  if ($(this).hasClass("check-eye-close")) {
    $("#inputPassword3").attr("type", "text");
    $(this).attr("src", "/assets/images/icons/ic_eye-open.png");
  } else {
    $("#inputPassword3").attr("type", "password");
    $(this).attr("src", "/assets/images/icons/ic_eye_close.png");
  }

  $(this).toggleClass("check-eye-close").toggleClass("check-eye-open");
});
