window.addEventListener('load', function () {
    // 移动端click事件优化
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function () {
            FastClick.attach(document.body);
        }, false);
    }
    // 导航栏显示隐藏按钮
    const search = this.document.querySelector('.search');
    const tabBtn = search.querySelector('.tab-btn');
    const s = this.document.querySelector('.s');
    const lis = s.querySelectorAll('li');
    const rexx = this.document.querySelector('#rexx');
    let flag = 0;
    // 移动端展现导航栏，点击导航栏元素与网页端一致
    tabBtn.addEventListener('touchstart', function () {
        if (flag == 0) {
            s.style.display = 'flex';
            this.style.color = 'pink';
            rexx.style.display = 'none';
            rexx.previousElementSibling.style.borderRight = '2px solid pink';
            this.style.flex = '66.66%';
            flag++;
        } else {
            s.style.display = 'none';
            tabBtn.style.color = '#ff6000';
            rexx.style.display = '';
            rexx.previousElementSibling.style.borderRight = '';
            tabBtn.style.flex = '';
            flag = 0;
        }
    });
    // 网页端展现与隐藏导航栏
    tabBtn.addEventListener('mouseover', function () {
        s.style.display = 'flex';
        this.style.color = 'pink';
        rexx.style.display = 'none';
        rexx.previousElementSibling.style.borderRight = '2px solid pink';
        this.style.flex = '66.66%';
        flag++;
    });
    search.addEventListener('mouseleave', function () {
        s.style.display = 'none';
        tabBtn.style.color = '#ff6000';
        rexx.style.display = '';
        rexx.previousElementSibling.style.borderRight = '';
        tabBtn.style.flex = '';
        flag = 0;
    });
    s.addEventListener('click', () => {
        s.style.display = 'none';
        tabBtn.style.color = '#ff6000';
        rexx.style.display = '';
        rexx.previousElementSibling.style.borderRight = '';
        tabBtn.style.flex = '';
        flag = 0;
    })
    for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener('click', () => {
            s.style.display = 'none';
            tabBtn.style.color = '#ff6000';
            rexx.style.display = '';
            rexx.previousElementSibling.style.borderRight = '';
            tabBtn.style.flex = '';
            flag = 0;
        });
    }
    // 回到顶部按钮
    const nav = search.querySelector('.nav');
    // const goBottomBtn = nav.querySelector('.go-bottom-btn');
    const goTopBtn = nav.querySelector('.go-top-btn');
    goTopBtn.addEventListener('click', function () {
        animate(window, 0);
    });
    // goBottomBtn.addEventListener('click', function () {
    //     // 注意：整个页面的高度 - 窗口高度
    //     animate(window, document.documentElement.scrollHeight - window.innerHeight);
    // });

    // 先封装在一个函数里
    function animate(obj, target, callback) {
        // 首先清除一次定时器，否则一直触发该事件会一直运行定时器，即一直执行动画使速度越来越快距离越来越远
        clearInterval(obj.timer);
        // 使用 给对象的属性赋值 代替 var声明定时器 ，好处是可以给每个元素独立的定时器
        obj.timer = setInterval(function () {
            // 步长值写在定时器里，因为每次都需重新计算
            // 这时JS使用小数用算会有误差，所以避免使用小数用算，正值将步长值向右取整
            // 这时仍有问题，正值向右取整，而负值（即往回走）应向左取整，所以完整的：保留步长公式，然后加判断
            // let step = Math.ceil((target - obj.offsetLeft) / 10);
            // step = step > 0 ? Math.ceil(step) : Math.floor(step); 三元表达式版
            // 缓动动画步长值=（目标位置-对象实时位置）/10 。
            // 注：匀速动画对应的步长值就是10；缓动动画和匀速动画都应根据实时位置在可以动起来
            let step = (target - window.pageYOffset) / 10;
            if (target - window.pageYOffset > 0) {
                step = Math.ceil((target - window.pageYOffset) / 10);
            } else {
                step = Math.floor((target - window.pageYOffset) / 10);
            }
            if (window.pageYOffset == target) {
                clearInterval(obj.timer);
                // // 回调函数写在定时器结束里,并判断是否有，
                // if (callback) {
                //     callback();
                // }
                // 可以写为,原理是短路用算，如果有callback参传进来，那么调用，没有callback传进来自然也不会再执行
                callback && callback();
            }
            // 注意盒子移动还是根据当前位置再加步长值，始终注意使用element.style.left赋值时需要加单位+'px'
            // obj.style.left = obj.offsetLeft + step + 'px';
            window.scroll(0, window.pageYOffset + step);
        }, 15) // 毫秒数常用为15
    };

    // 动态渲染-仅字幕组官网部分
    const sub_www = this.document.querySelector('#sub-www');
    const sub_www_ul = sub_www.children[0];
    const app_zh = this.document.querySelector('#app-zh');
    const app_zh_ul = app_zh.children[0];
    const app_dm = this.document.querySelector('#app-dm');
    const app_dm_ul = app_dm.children[0];

    // 存储の数据
    const sub_www_data = [{
        link: 'http://ywtrzm.com/',
        title: '亿万同人字幕组',
    }, {
        link: 'http://www.wanwansub.com/',
        title: '弯弯字幕组',
    }, {
        link: 'http://www.zimuxia.cn/',
        title: 'fix字幕侠',
    }, {
        link: 'https://newzmz.com/index.html',
        title: 'NEW字幕组',
    }, {
        link: 'https://www.huanyuezmz.site/',
        title: '幻月字幕组',
    }, {
        link: 'https://subs.kamigami.org/category/drama',
        title: '诸神字幕组',
    }, {
        link: 'https://www.tokyonothot.com/',
        title: '东京不够热sub',
    }, {
        link: 'https://sub.shinybbs.vip/',
        title: '深影字幕组',
    }, {
        link: 'https://www.icezmz.com/',
        title: '冰冰字幕组',
    }, {
        link: 'https://www.yysub.net/',
        title: 'RRYS字幕组',
    }, {
        link: 'https://www.dmguo.org/forum.php',
        title: '动漫国字幕组',
    }, {
        link: 'https://susuifa.com/',
        title: '苏苏发布',
    }];
    const app_zh_data = [{
        link: 'https://yssenlin.app/',
        title: '影视森林'
    }, {
        link: 'http://hh-1.tv/',
        title: '花火视频'
    }, {
        link: 'https://mn88.me/',
        title: '迷你影视'
    }, {
        link: 'https://sz66.app/',
        title: '手指'
    }, {
        link: 'https://zuida.app/',
        title: '最大影视'
    }, {
        link: 'https://meijuxingqiu.net/',
        title: '美剧星球'
    }, {
        link: 'https://www.i8k.cc/index.php/label/down.html',
        title: '极客影院'
    }];
    const app_dm_data = [{
        link: 'https://clicli.app/',
        title: 'clicli动漫'
    }, {
        link: 'https://zzz-1251249846.file.myqcloud.com/index.html',
        title: 'ZzzFun'
    }
    ];
    // 渲染(主要)
    setData(sub_www_data, sub_www_ul);
    setData(app_zh_data, app_zh_ul);
    setData(app_dm_data, app_dm_ul);

    function setData(myData, father) {
        // 先清空
        father.innerHTML = '';
        myData.forEach(function (value) {
            const htmlStr = `<li>
                <a href="${value.link}" target="blank">
                    <h4>${value.title}</h4>
                    <span>${value.link}</span>
                </a>
            </li>`;
            let dataOut = htmlStr;
            father.insertAdjacentHTML('beforeend', dataOut);
        });
    };

    // 快速跳转
    // const lis = s.querySelectorAll('li');
    let tops = [];
    const h2S = this.document.querySelectorAll('.h2');
    for (let i = 0; i < h2S.length; i++) {
        tops[i] = parseInt(h2S[i].offsetTop - tabBtn.offsetHeight + 'px');
    }
    for (let i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i);
        lis[i].addEventListener('click', function () {
            // 导航栏
            s.style.display = 'none';
            tabBtn.style.color = '#ff6000';
            tabBtn.style.flex = ''
            flag = 0;

            index1 = this.getAttribute('index')
            console.log(index1);
            window.scroll(0, tops[index1])
        })
    }
})