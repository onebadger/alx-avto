// fixed navigation 

var header = $('#header');
var navigation = $('nav');
var logo = $('.logo svg');
var logoText = $('.logo p');
var phone = $('.phone a');
var phoneText = $('.phone p');
var cssBreakpoint = $('.js-media');

var windowWidth = $(window).width();
var headerHeight;
var navBarHeight;
var fixed = false;

function updateHeights() {
  headerHeight = header.outerHeight();
  if (!fixed) headerHeight = headerHeight - navigation.outerHeight();

  navBarHeight = navigation.outerHeight();
}

function topFixedNav() {
  if ($(window).scrollTop() >= headerHeight) {
      fixed = true;
      navigation.addClass('fixed');
      $(document.body).css('padding-top', navBarHeight );
      
      logoText
        .add(phone)
        .add(phoneText)
        .css({'color': '#fff'});
      logo.css({'fill': '#fff'});
  } else {
      fixed = false;
      navigation.removeClass('fixed');
      $(document.body).css('padding-top', '0' );
    
      logoText
        .add(phone)
        .add(phoneText)
        .css({'color': '#000'});
      logo.css({'fill': '#000'});
  }
}


function phoneOnWideScreen () {
  if (cssBreakpoint.css('display') === 'block') {
    $(window).bind('scroll', function () {
      if ($(window).scrollTop() > 600) {
        $('.nav-phone').addClass('nav-phone-block');
      } else {
        $('.nav-phone').removeClass('nav-phone-block');
      }
    });
  } 
}

function onWindowScroll() {
  topFixedNav()
  phoneOnWideScreen()
}

function onWindowResize() {
  updateHeights()
  topFixedNav()
  updateHeights()
  phoneOnWideScreen()
  servicesListsItems()
}

$(window).ready( function() {
  updateHeights()
  $(window).on('scroll', onWindowScroll)
  $(window).on('resize', onWindowResize)
  topFixedNav();
});


// dropdown menu

function dropdownClick() {
    document.getElementById("dropdown-menu").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};



// #portfolio

var portfolioImgCounter = 0;
var lastPortfolioIndex = autoImg.length - 1;

function portfolioImgLoaderSm () {
  $('.portfolio-condition-p1').text(autoImg[portfolioImgCounter].status);
  $('.portfolio-img-img1').attr('src', autoImg[portfolioImgCounter].image);
  $('.portfolio-text-p1').text(autoImg[portfolioImgCounter].info);
};

function portfolioImgLoaderMd () {
  $('.portfolio-condition-p2').text(autoImg[portfolioImgCounter].status);
  $('.portfolio-img-img2').attr('src', autoImg[portfolioImgCounter].image);
  $('.portfolio-text-p2').text(autoImg[portfolioImgCounter].info);
  $('.portfolio-condition-p3').text(autoImg[portfolioImgCounter + 1].status);
  $('.portfolio-img-img3').attr('src', autoImg[portfolioImgCounter + 1].image);
  $('.portfolio-text-p3').text(autoImg[portfolioImgCounter + 1].info);
};

function clickSm () {
  
  $('.portfolio-sm-right').click(function(event) {
    event.preventDefault();
    if (portfolioImgCounter == lastPortfolioIndex) {
      portfolioImgCounter = 0;
      portfolioImgLoaderSm();
    } else {
      portfolioImgCounter += 1;
      portfolioImgLoaderSm();
    }      
  });

  $('.portfolio-sm-left').click(function(event) {
    event.preventDefault();
  
    if (portfolioImgCounter == 0) {
      portfolioImgCounter = lastPortfolioIndex;
      portfolioImgLoaderSm();
    } else {
      portfolioImgCounter -= 1;
      portfolioImgLoaderSm();
    }
  });
}

function clickMd () {
  
  $('.portfolio-md-right').click(function(event) {
    event.preventDefault();
    if (portfolioImgCounter == lastPortfolioIndex - 1) {
      portfolioImgCounter = 0;
      portfolioImgLoaderMd();
    } else {
      portfolioImgCounter += 2;
      portfolioImgLoaderMd();
    }
  });

  $('.portfolio-md-left').click(function(event) {
    event.preventDefault();
    if (portfolioImgCounter == 0) {
      portfolioImgCounter = lastPortfolioIndex - 1;
      portfolioImgLoaderMd();
    } else {
      portfolioImgCounter -= 2;
      portfolioImgLoaderMd();
    }
  });
}

portfolioImgLoaderSm();
portfolioImgLoaderMd();
clickSm();
clickMd();



// #services

$('.click-01').on('click', function() {
  event.preventDefault();
  if (cssBreakpoint.css('display') === 'none' && $('.serv-01').css('display') === 'none' ) {
    $('.serv-01').show();
    $('.click-01').addClass('new');
    
  } else if (cssBreakpoint.css('display') === 'none' && $('.serv-01').css('display') === 'block' ) {
    $('.serv-01').hide();
    $('.click-01').removeClass('new');
    
  } else if (cssBreakpoint.css('display') !== 'none') {
    return;
    
  }
});

$('.click-02').on('click', function() {
  event.preventDefault();
  if (cssBreakpoint.css('display') === 'none' && $('.serv-02').css('display') === 'none' ) {
    $('.serv-02').show();
    $('.click-02').addClass('new');
    
  } else if (cssBreakpoint.css('display') === 'none' && $('.serv-02').css('display') === 'block' ) {
    $('.serv-02').hide();
    $('.click-02').removeClass('new');
    
  } else if (cssBreakpoint.css('display') !== 'none') {
    return;
    
  }
});
$('.click-03').on('click', function() {
  event.preventDefault();
  if (cssBreakpoint.css('display') === 'none' && $('.serv-03').css('display') === 'none' ) {
    $('.serv-03').show();
    $('.click-03').addClass('new');
    
  } else if (cssBreakpoint.css('display') === 'none' && $('.serv-03').css('display') === 'block' ) {
    $('.serv-03').hide();
    $('.click-03').removeClass('new');
    
  } else if (cssBreakpoint.css('display') !== 'none') {
    return;
    
  }
});


function servicesListsItems () {
  if ( cssBreakpoint.css('display') === 'none' ) {
  $('.serv').hide();
} else {
  $('.serv').show();
}
}



// #tools

var toolsImgCounter = 0;
var lastToolsIndex = toolImg.length - 1;
var $toolsImgLoader = function() {
  $('.tools-img').attr('src', toolImg[toolsImgCounter].imgPath);
};

$toolsImgLoader();

$('.tools-anchor-right').click(function(event) {
  event.preventDefault();
  if (toolsImgCounter == lastToolsIndex) {
    toolsImgCounter = 0;
    $toolsImgLoader();
  } else {
    toolsImgCounter += 1;
    $toolsImgLoader();
  }      
});

$('.tools-anchor-left').click(function(event) {
  event.preventDefault();
  
  if (toolsImgCounter == 0) {
    toolsImgCounter = lastToolsIndex;
    $toolsImgLoader();
  } else {
    toolsImgCounter -= 1;
    $toolsImgLoader();
  } 
});



// #staff

var staffImgCounter = 0;
var lastStaffIndex = staffImg.length - 1;
var $staffImgLoader = function() {
  $('.staff-img').attr('src', staffImg[staffImgCounter].imgPath);
  $('.staff-info').text(staffImg[staffImgCounter].imgInfo);
};

$staffImgLoader();

$('.staff-anchor-right').click(function(event) {
  event.preventDefault();
  if (staffImgCounter == lastStaffIndex) {
    staffImgCounter = 0;
    $staffImgLoader();
  } else {
    staffImgCounter += 1;
    $staffImgLoader();
  }      
});

$('.staff-anchor-left').click(function(event) {
  event.preventDefault();
  
  if (staffImgCounter == 0) {
    staffImgCounter = lastStaffIndex;
    $staffImgLoader();
  } else {
    staffImgCounter -= 1;
    $staffImgLoader();
  } 
});



// #clients

var clientsImgCounter = 0;
var lastClientsIndex = clientsImg.length - 1;
var $clientsImgLoader = function() {
  $('.clients-img').attr('src', clientsImg[clientsImgCounter].imgPath);
  $('.clients-info-name strong').text(clientsImg[clientsImgCounter].imgName);
  $('.clients-info').text(clientsImg[clientsImgCounter].imgInfo);
};

$clientsImgLoader();

$('.clients-anchor-right').click(function(event) {
  event.preventDefault();
  if (clientsImgCounter == lastClientsIndex) {
    clientsImgCounter = 0;
    $clientsImgLoader();
  } else {
    clientsImgCounter += 1;
    $clientsImgLoader();
  }      
});

$('.clients-anchor-left').click(function(event) {
  event.preventDefault();
  
  if (clientsImgCounter == 0) {
    clientsImgCounter = lastClientsIndex;
    $clientsImgLoader();
  } else {
    clientsImgCounter -= 1;
    $clientsImgLoader();
  } 
});



// jump navigation padding

window.addEventListener("hashchange", function() { scrollBy(0, - navigation.outerHeight() ) });
 

