
$("#partyBtn").on("click", function (){
		  Swal.fire({
		  title: 'Dann mal los!!',
		  text: 'Aber vorher hör dir noch die Grußbotschaft deiner Gang an!',
		  imageUrl: 'https://lh3.googleusercontent.com/2PPGFBMPVTP7RDXgF5pxkK43_fW8_y_GDO8t23_i37qV_rMY44h8XMkbePOnAiogORWGLVnRZBRBDTlAAOX9JaJ2XvpGDed9RHHLssx983dysfhwI9OLIJkZ3UHDcNo0RlxmhGtAHuXcSIUn8ba9ZropnpnD0J_DNddTo69CiQp_MnWyOmlyks23PIHG6rzBPnxtN2wW1PxY0z5YEYj1PZ7GLbGI9iE12ZUE-sx2nEeGNcD_b238mh6k9NtQTxLh-0-JguN6C62saMxAiFy_LnZrhe_lQ0abfj94NR6WOayVLS6X9detvjkKb-KGcGZAKsMnOL-7r-QpWF8sqeWrWgl22C9ZSxNteDYYomymxjFC4swNSNkvnniiUkW_njtYmKFIzeE53fjfpxOYb-NT9Yv9a-s7Ljg7HgfEWkW_dNC0QtC1190pPaB2Ye02QtcFtmRx7krvWFQsgOxi70mMU0uaC3N9wc9I1IHYFGpH8JzCu2tcosBGkRL_C1wI01WTnDuN_0E5gnmw_0b8Mab1_QEahmBAZOXk_6hWR3zEv431rgr8QVOo4nN8rrEaN_dbfgKPKP4_TMNdrGjER0sgxTTGzVi8Ye8yv7Dc4KmcRRPGgRPzmmeTKEZ8b4WJIjsf1AaM7Ko6NUT_7jaAEEk43v-6ddlVmcC-=w1840-h1380-no',
		  imageWidth: 280,
		  imageHeight: 200,
		  imageAlt: 'Custom image',
		  animation: false
		})
	});

$(".dontKnowBtn").on("click", function (){
		  Swal.fire({
		  title: 'Waaaaas???',
		  text: 'Das machen wir TROTZDEM!!',
		  imageUrl: 'https://lh3.googleusercontent.com/0EQ7reR8AyNE6w6hIY3HR2aHPKEwuyPRu6odc4a5VMjO5a1MHAqtwcFbIdPsX-w5GxPD93eanrSynuxXUbD7ekOQtSYJpVX1W1rznT7h4_kYERw66mrwwprJmdYz0NtIkO8eIesmnC8zHvazzz6YyKSi9z-HeUVmXXOn2-vCzIVtM6gs5GxU6IAtWOtV-fkfeY_PHpW95fqv_30TBjEqSdZ6YqivWPbuAtlYJaQ1FlxsxngFB4875sTWeRBniMMxy1axmDgw9-Kqba8aofggtfq64hQqyDna6dPraWL-ZirilxmcgtFpOaw912fwbHNKWpFHLj1-jBnjzi4aNpK6C2-_xBv7NJytLubm-v_-eBaWOZguT3hd4GjmKknEIA0m33v1utI7jHhjyQDlvUWniE2ENS7ArkcBGU4YujDzQQ53biaz83VXsLQddiL5hhwORVNotXJjl_Zz7YBaBXpn7C0i7PZnn6kh-GfDpWGAXLzykn6gRNsU33mQQBxwMM-80Ua6--_EDDxwtuSCQbBaz-04f-I1oajCs8t0OW7MxXg2KWD55oJmrunR5R4-FdfQuMW1Hotvu1HDcxaf8aFHFgxW-mVRPXipYCnF6vznx4VxFesMXWy-wIRbur-x4K_RqXpfJDfcVTsnPZ_s3x8uXsHbu9fu-mc9=w1862-h1396-no',
		  imageWidth: 280,
		  imageHeight: 200,
		  imageAlt: 'Custom image',
		  animation: false,
		  confirmButtonText: 'Na gut...!',
		})
	});

$(".doItBtn").on("click", function (){
		  Swal.fire({
		  title: 'Gute Wahl :) !!',
		  text: 'Küsschen',
		  imageUrl: 'Hochzeit.jpg',
		  imageWidth: 200,
		  imageHeight: 200,
		  imageAlt: 'Custom image',
		  animation: false,
		  confirmButtonText: '<i class="fa fa-thumbs-up"></i> Jaaaa!',
		})
	});

function deferVideo() {

    //defer html5 video loading
  $("video source").each(function() {
    var sourceFile = $(this).attr("data-src");
    $(this).attr("src", sourceFile);
    var video = this.parentElement;
    video.load();
    // uncomment if video is not autoplay
    //video.play();
  });

}
window.onload = deferVideo;

Swal.fire({
  title: '<strong>Hast du Lust <u>deinen</u> Geburtstag zu feiern??</strong>',
  html:
    'Überlegs <b>dir</b>, ' +
    
    '.... ',
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText:
    '<i class="fa fa-thumbs-up"></i> Jaaaa!',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  cancelButtonText:
    '<i class="fa fa-thumbs-down"></i> Nö, ich flez mich aufe Couch und guck Homeland durch',
  cancelButtonAriaLabel: 'Thumbs down',

})
