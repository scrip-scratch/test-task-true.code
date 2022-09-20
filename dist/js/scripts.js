"use strict";function supportFormatWebp(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0==e.toDataURL("image/webp").indexOf("data:image/webp")}window.addEventListener("load",(function(){supportFormatWebp()||(document.querySelector(".space").style.background="url(../img/bg_space.jpg)",document.querySelector(".smoke").style.background="url(../img/bg_smoke.jpg)"),document.querySelector(".loader-screen").style.display="none";["smoke","space","line__line","line__circle_bottom","banner-mars__heading","banner-mars__video"].forEach((function(e){document.querySelector(".".concat(e)).style.animationPlayState="running"}));var e=document.querySelector(".space");setTimeout((function(){document.body.onmousemove=function(t){var o=document.body.offsetWidth;e.style.transform="translateX(0)",t.clientX<o/3&&(e.style.transform="translateX(-5%)"),t.clientX>o/3*2&&(e.style.transform="translateX(5%)")}}),2500)}));var headerButton=document.querySelector(".header__btn"),bookFormBlock=document.querySelector(".book-form__wrap"),bookFormClose=document.querySelector(".book-form__close");headerButton.onclick=function(e){e.preventDefault(),bookFormBlock.classList.toggle("book-form__wrap_hidden")},bookFormClose.onclick=function(e){e.preventDefault(),bookFormBlock.classList.toggle("book-form__wrap_hidden")};var headerBurger=document.querySelector(".header__burger"),headerList=document.querySelector(".header__list");headerBurger.onclick=function(){headerBurger.classList.toggle("header__burger_active"),headerList.classList.toggle("header__list_showed")};var inputAmount=document.querySelector("#tickets-amount");inputAmount.onfocus=function(){var e=inputAmount.value;inputAmount.value="",inputAmount.onchange=function(){var t=inputAmount.value;isNaN(t)?inputAmount.value=e:2==t.toString().slice(-1)||3==t.toString().slice(-1)||4==t.toString().slice(-1)?inputAmount.value="".concat(t," человека"):inputAmount.value="".concat(t," человек")}};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsic3VwcG9ydEZvcm1hdFdlYnAiLCJlbGVtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZ2V0Q29udGV4dCIsInRvRGF0YVVSTCIsImluZGV4T2YiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiYmFja2dyb3VuZCIsImRpc3BsYXkiLCJmb3JFYWNoIiwibm9kZSIsImNvbmNhdCIsImFuaW1hdGlvblBsYXlTdGF0ZSIsInNwYWNlQmciLCJzZXRUaW1lb3V0IiwiYm9keSIsIm9ubW91c2Vtb3ZlIiwiZSIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJ0cmFuc2Zvcm0iLCJjbGllbnRYIiwiaGVhZGVyQnV0dG9uIiwiYm9va0Zvcm1CbG9jayIsImJvb2tGb3JtQ2xvc2UiLCJvbmNsaWNrIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJoZWFkZXJCdXJnZXIiLCJoZWFkZXJMaXN0IiwiaW5wdXRBbW91bnQiLCJvbmZvY3VzIiwidmFsdWUiLCJvbmNoYW5nZSIsIm5ld1ZhbHVlIiwiaXNOYU4iLCJ0b1N0cmluZyIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQSxhQUFBLFNBQVNBLG9CQUNQLElBQUlDLEVBQU9DLFNBQVNDLGNBQWMsVUFDbEMsU0FBT0YsRUFBS0csYUFBY0gsRUFBS0csV0FBVyxRQUUwQixHQUEzREgsRUFBS0ksVUFBVSxjQUFjQyxRQUFRLGtCQUsvQyxDQUVEQyxPQUFPQyxpQkFBaUIsUUFBUSxXQUN6QlIsc0JBQ0hFLFNBQVNPLGNBQWMsVUFBVUMsTUFBTUMsV0FDckMsMkJBQ0ZULFNBQVNPLGNBQWMsVUFBVUMsTUFBTUMsV0FDckMsNEJBR2lCVCxTQUFTTyxjQUFjLGtCQUMvQkMsTUFBTUUsUUFBVSxPQUdULENBQ2xCLFFBQ0EsUUFDQSxhQUNBLHNCQUNBLHVCQUNBLHNCQUdZQyxTQUFRLFNBQUNDLEdBQ3JCWixTQUFTTyxjQUFULElBQUFNLE9BQTJCRCxJQUFRSixNQUFNTSxtQkFBcUIsU0FDL0QsSUFHRCxJQUFNQyxFQUFVZixTQUFTTyxjQUFjLFVBRXZDUyxZQUFXLFdBQ1RoQixTQUFTaUIsS0FBS0MsWUFBYyxTQUFDQyxHQUMzQixJQUFNQyxFQUFRcEIsU0FBU2lCLEtBQUtJLFlBQzVCTixFQUFRUCxNQUFNYyxVQUFZLGdCQUV0QkgsRUFBRUksUUFBVUgsRUFBUSxJQUN0QkwsRUFBUVAsTUFBTWMsVUFBWSxtQkFFeEJILEVBQUVJLFFBQVdILEVBQVEsRUFBSyxJQUM1QkwsRUFBUVAsTUFBTWMsVUFBWSxpQkFFN0IsQ0FDRixHQUFFLEtBQ0osSUFHRCxJQUFNRSxhQUFleEIsU0FBU08sY0FBYyxnQkFDdENrQixjQUFnQnpCLFNBQVNPLGNBQWMsb0JBQ3ZDbUIsY0FBZ0IxQixTQUFTTyxjQUFjLHFCQUU3Q2lCLGFBQWFHLFFBQVUsU0FBQ1IsR0FDdEJBLEVBQUVTLGlCQUNGSCxjQUFjSSxVQUFVQyxPQUFPLHlCQUNoQyxFQUVESixjQUFjQyxRQUFVLFNBQUNSLEdBQ3ZCQSxFQUFFUyxpQkFDRkgsY0FBY0ksVUFBVUMsT0FBTyx5QkFDaEMsRUFHRCxJQUFNQyxhQUFlL0IsU0FBU08sY0FBYyxtQkFDdEN5QixXQUFhaEMsU0FBU08sY0FBYyxpQkFFMUN3QixhQUFhSixRQUFVLFdBQ3JCSSxhQUFhRixVQUFVQyxPQUFPLHlCQUM5QkUsV0FBV0gsVUFBVUMsT0FBTyxzQkFDN0IsRUFHRCxJQUFNRyxZQUFjakMsU0FBU08sY0FBYyxtQkFFM0MwQixZQUFZQyxRQUFVLFdBQ3BCLElBQUlDLEVBQVFGLFlBQVlFLE1BQ3hCRixZQUFZRSxNQUFRLEdBQ3BCRixZQUFZRyxTQUFXLFdBQ3JCLElBQUlDLEVBQVdKLFlBQVlFLE1BQ3RCRyxNQUFNRCxHQVdUSixZQUFZRSxNQUFRQSxFQVRlLEdBQWpDRSxFQUFTRSxXQUFXQyxPQUFPLElBQ00sR0FBakNILEVBQVNFLFdBQVdDLE9BQU8sSUFDTSxHQUFqQ0gsRUFBU0UsV0FBV0MsT0FBTyxHQUUzQlAsWUFBWUUsTUFBWixHQUFBdEIsT0FBdUJ3QixFQUF2QixhQUVBSixZQUFZRSxNQUFaLEdBQUF0QixPQUF1QndCLEVBQXZCLFdBS0wsQ0FDRiIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc3VwcG9ydEZvcm1hdFdlYnAoKSB7XHJcbiAgbGV0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gIGlmICghIShlbGVtLmdldENvbnRleHQgJiYgZWxlbS5nZXRDb250ZXh0KFwiMmRcIikpKSB7XHJcbiAgICAvLyB3YXMgYWJsZSBvciBub3QgdG8gZ2V0IFdlYlAgcmVwcmVzZW50YXRpb25cclxuICAgIHJldHVybiBlbGVtLnRvRGF0YVVSTChcImltYWdlL3dlYnBcIikuaW5kZXhPZihcImRhdGE6aW1hZ2Uvd2VicFwiKSA9PSAwO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyB2ZXJ5IG9sZCBicm93c2VyIGxpa2UgSUUgOCwgY2FudmFzIG5vdCBzdXBwb3J0ZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgaWYgKCFzdXBwb3J0Rm9ybWF0V2VicCgpKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwYWNlXCIpLnN0eWxlLmJhY2tncm91bmQgPVxyXG4gICAgICBcInVybCguLi9pbWcvYmdfc3BhY2UuanBnKVwiO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbW9rZVwiKS5zdHlsZS5iYWNrZ3JvdW5kID1cclxuICAgICAgXCJ1cmwoLi4vaW1nL2JnX3Ntb2tlLmpwZylcIjtcclxuICB9XHJcbiAgLy8gPT09PT09PT09PT0gT24gZnVsbCBsb2FkIHJlbW92ZSBsb2FkLXNjcmVlblxyXG4gIGNvbnN0IGxvYWRlclNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGVyLXNjcmVlblwiKTtcclxuICBsb2FkZXJTY3JlZW4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAvLyA9PT09PT09PT09PSBBbGwgdGhlIG5vZGVzIHRoYXQgc2hvdWxkIGJlIGFuaW1hdGVkLi4uXHJcbiAgbGV0IGFuaW1hdGVkTm9kZXMgPSBbXHJcbiAgICBcInNtb2tlXCIsXHJcbiAgICBcInNwYWNlXCIsXHJcbiAgICBcImxpbmVfX2xpbmVcIixcclxuICAgIFwibGluZV9fY2lyY2xlX2JvdHRvbVwiLFxyXG4gICAgXCJiYW5uZXItbWFyc19faGVhZGluZ1wiLFxyXG4gICAgXCJiYW5uZXItbWFyc19fdmlkZW9cIixcclxuICBdO1xyXG4gIC8vIC4uLmFuaW1hdGUgdGhlbVxyXG4gIGFuaW1hdGVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bm9kZX1gKS5zdHlsZS5hbmltYXRpb25QbGF5U3RhdGUgPSBcInJ1bm5pbmdcIjtcclxuICB9KTtcclxuXHJcbiAgLy8gPT09PT09PT09PT0gTW92aW5nIFNwYWNlIEJhY2tncm91bmQgT24gTW91c2Vtb3ZlXHJcbiAgY29uc3Qgc3BhY2VCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BhY2VcIik7XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5vbm1vdXNlbW92ZSA9IChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHdpZHRoID0gZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aDtcclxuICAgICAgc3BhY2VCZy5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMClcIjtcclxuXHJcbiAgICAgIGlmIChlLmNsaWVudFggPCB3aWR0aCAvIDMpIHtcclxuICAgICAgICBzcGFjZUJnLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgtNSUpXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUuY2xpZW50WCA+ICh3aWR0aCAvIDMpICogMikge1xyXG4gICAgICAgIHNwYWNlQmcuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDUlKVwiO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIDI1MDApOyAvLyB3YWl0IHRvIGVuZCBvZiBhbmltYXRpb25cclxufSk7XHJcblxyXG4vLyA9PT09PT09PT09PSBTaG93L0hpZGUgQm9va2luZyBGb3JtXHJcbmNvbnN0IGhlYWRlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19idG5cIik7XHJcbmNvbnN0IGJvb2tGb3JtQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvb2stZm9ybV9fd3JhcFwiKTtcclxuY29uc3QgYm9va0Zvcm1DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9vay1mb3JtX19jbG9zZVwiKTtcclxuXHJcbmhlYWRlckJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgYm9va0Zvcm1CbG9jay5jbGFzc0xpc3QudG9nZ2xlKFwiYm9vay1mb3JtX193cmFwX2hpZGRlblwiKTtcclxufTtcclxuXHJcbmJvb2tGb3JtQ2xvc2Uub25jbGljayA9IChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGJvb2tGb3JtQmxvY2suY2xhc3NMaXN0LnRvZ2dsZShcImJvb2stZm9ybV9fd3JhcF9oaWRkZW5cIik7XHJcbn07XHJcblxyXG4vLyA9PT09PT09PT09PSBIZWFkZXIgQnVyZ2VyXHJcbmNvbnN0IGhlYWRlckJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19idXJnZXJcIik7XHJcbmNvbnN0IGhlYWRlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbGlzdFwiKTtcclxuXHJcbmhlYWRlckJ1cmdlci5vbmNsaWNrID0gKCkgPT4ge1xyXG4gIGhlYWRlckJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGVhZGVyX19idXJnZXJfYWN0aXZlXCIpO1xyXG4gIGhlYWRlckxpc3QuY2xhc3NMaXN0LnRvZ2dsZShcImhlYWRlcl9fbGlzdF9zaG93ZWRcIik7XHJcbn07XHJcblxyXG4vLyA9PT09PT09PT09PSBWYWxpZGF0ZSBJbnB1dCBUaWNrZXRzIEFtb3VudFxyXG5jb25zdCBpbnB1dEFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGlja2V0cy1hbW91bnRcIik7XHJcblxyXG5pbnB1dEFtb3VudC5vbmZvY3VzID0gKCkgPT4ge1xyXG4gIGxldCB2YWx1ZSA9IGlucHV0QW1vdW50LnZhbHVlO1xyXG4gIGlucHV0QW1vdW50LnZhbHVlID0gXCJcIjtcclxuICBpbnB1dEFtb3VudC5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgIGxldCBuZXdWYWx1ZSA9IGlucHV0QW1vdW50LnZhbHVlO1xyXG4gICAgaWYgKCFpc05hTihuZXdWYWx1ZSkpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIG5ld1ZhbHVlLnRvU3RyaW5nKCkuc2xpY2UoLTEpID09IDIgfHxcclxuICAgICAgICBuZXdWYWx1ZS50b1N0cmluZygpLnNsaWNlKC0xKSA9PSAzIHx8XHJcbiAgICAgICAgbmV3VmFsdWUudG9TdHJpbmcoKS5zbGljZSgtMSkgPT0gNFxyXG4gICAgICApIHtcclxuICAgICAgICBpbnB1dEFtb3VudC52YWx1ZSA9IGAke25ld1ZhbHVlfSDRh9C10LvQvtCy0LXQutCwYDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbnB1dEFtb3VudC52YWx1ZSA9IGAke25ld1ZhbHVlfSDRh9C10LvQvtCy0LXQumA7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlucHV0QW1vdW50LnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuIl19