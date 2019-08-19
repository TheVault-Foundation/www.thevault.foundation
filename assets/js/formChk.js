/* check contact us form2 */

function formChk2() {
  var mFrm2 = document.mailForm2;
    //1.이름 체크
    if(no_value2('FNAME')) {
      alert("이름을 입력해 주세요");
      mFrm2.FNAME.focus();
    }
    //2.이메일 체크
    else if(no_value2('EMAIL')) {
      alert("메일주소를 입력해 주세요");
      mFrm2.EMAIL.focus();
    }
    //3.정확한 이메일 체크ㅡ
    else if(!chkEmail2 ( document.mailForm2.EMAIL.value)){
       alert("잘못된 이메일 주소입니다. 정확한 이메일형식으로 다시 입력해 주세요");
      mFrm2.EMAIL.focus();
    }
    //4.문의사항 체크
    else if(no_value2('MEG')) {
      alert("질문사항을 입력해 주세요");
      mFrm2.MEG.focus();
    }
    else {
      mFrm2.submit();
      return true;
    }
  }

  // # Val 체크 하기
  function no_value2(inputName){
    value=eval('document.mailForm2.'+inputName).value.replace(/\s/g,"");
    if(!value) return 1;
  }

  // # Email 형식 체크하기
  function chkEmail2 (id)
  {
    var nat;
    var ndot;
    if (3 > id.length || 100 < id.length)
    {
      return (false);
    }
    nat = 0;
    ndot = 0;
    for (var i = 0; i < id.length; i++)
    {
      xone = (id.toLowerCase ()).charAt (i);
      if (!(('.' == xone) || ('@' == xone) || ('-' == xone) || ('_' == xone) || ("0" <= xone && "9" >= xone) || ("a" <= xone && "z" >= xone)))
      {
        return (false);
      }
      if ('@' == xone)
      {
        nat++;
      }
      if ('.' == xone)
      {
        ndot++;
      }
    }
    if (1 == nat && 0 < ndot)
    {
      return (true);
    }
    return (false);
  }

/* check private sale form */
function formChk() {
  var mFrm = document.mailForm;

    //2.이메일 체크
    if(no_value('EMAIL')) {
      alert("Please enter your E-mail address.");
      mFrm.EMAIL.focus();
    }
    //3.정확한 이메일 체크ㅡ
    else if(!chkEmail ( document.mailForm.EMAIL.value)){
       alert("Please enter a valid E-mail address.");
      mFrm.EMAIL.focus();
    }
    else {
      mFrm.submit();
      return true;
    }
  }

  // # Val 체크 하기
  function no_value(inputName){
    value=eval('document.mailForm.'+inputName).value.replace(/\s/g,"");
    if(!value) return 1;
  }

  // # Email 형식 체크하기
  function chkEmail (id)
  {
    var nat;
    var ndot;
    if (3 > id.length || 100 < id.length)
    {
      return (false);
    }
    nat = 0;
    ndot = 0;
    for (var i = 0; i < id.length; i++)
    {
      xone = (id.toLowerCase ()).charAt (i);
      if (!(('.' == xone) || ('@' == xone) || ('-' == xone) || ('_' == xone) || ("0" <= xone && "9" >= xone) || ("a" <= xone && "z" >= xone)))
      {
        return (false);
      }
      if ('@' == xone)
      {
        nat++;
      }
      if ('.' == xone)
      {
        ndot++;
      }
    }
    if (1 == nat && 0 < ndot)
    {
      return (true);
    }
    return (false);
  }
