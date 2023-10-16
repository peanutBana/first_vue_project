var cmp = {
	template: '<p>This is another local child component</p>'
};

//실습 1
Vue.component('todo-footer',{
        template: '<p>This is another global child component</p>'
    })

var app = new Vue({
    el : '#app',
    data: {
        message: 'This is a parent component'
    },
    //실습 2
    components: {
		'todo-list': cmp
	}
})