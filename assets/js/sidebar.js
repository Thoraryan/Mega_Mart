// active class in side bar
var currentPath = location.pathname;
var pathSegments = currentPath.split('/');
var lastSegment = pathSegments[pathSegments.length - 1];
console.log(lastSegment);
document.querySelector(`.admin_siderbarr .sidebar-link[href="${lastSegment}"]`).classList.add('active');
$('#admin_siderbarr .sidebar-link').each(function () {
    var $this = $(this);
    if ($this.attr('href').indexOf(current) !== -1) {
        document.querySelector(`.admin_siderbarr .sidebar-link[href="${lastSegment}"]`).classList.add('active');
    }
})

$(document).ready(function () {
    $('.sub-btn').click(function () {
        const component = $(this).data('component');
        $(`.component[data-component=${component}] .sub-menu, .component[data-component=${component}] .sub-menu2`).not($(this).next()).slideUp();
        $(this).next('.sub-menu, .sub-menu2, .sub-menu3,.sub-menu4,.sub-menu5').slideToggle();
        $(this).find('.dropdown, .dropdown2,.dropdown3,.dropdown4,.dropdown5').toggleClass('rotate');
    });

    $('.menu-btn').click(function () {
        const component = $(this).data('component');
        $(`.component[data-component=${component}] .side-bar,
            .component[data-component=${component}] .side-bar2,
            .component[data-component=${component}] .side-bar3,
            .component[data-component=${component}] .side-bar4,
            .component[data-component=${component}] .side-bar5`).addClass('active');
        $(`.component[data-component=${component}] .menu-btn,
            .component[data-component=${component}] .menu-btn2,
            .component[data-component=${component}] .menu-btn3,
            .component[data-component=${component}] .menu-btn4,
            .component[data-component=${component}] .menu-btn5`).css("visibility", "hidden");
    });

    $('.close-btn').click(function () {
        const component = $(this).data('component');
        $(`.component[data-component=${component}] .side-bar,
            .component[data-component=${component}] .side-bar2,
            .component[data-component=${component}] .side-bar3,
            .component[data-component=${component}] .side-bar4,
            .component[data-component=${component}] .side-bar5`).removeClass('active');
        $(`.component[data-component=${component}] .menu-btn,
            .component[data-component=${component}] .menu-btn2,
            .component[data-component=${component}] .menu-btn3,
            .component[data-component=${component}] .menu-btn4,
            .component[data-component=${component}] .menu-btn4`).css("visibility", "visible");
    });
});


$(document).ready(function () {
    function checkActive() {
        $('.item').each(function () {
            if ($(this).find('.sidebar-link.active').length > 0) {
                $(this).find('.dropdown-btn').addClass('active');
            } else {
                $(this).find('.dropdown-btn').removeClass('active');
            }
        });
    }
    checkActive();
});
function sideBarToggle() {
    $('.admin_siderbarr').toggleClass('admin_siderbarr_open');
    $('.admin_contentpart').toggleClass('w-100');
    $('.main-content').toggleClass('admin_contentpart_main');
}
function add_image(element) {
    $(element).addClass('d-none')
}