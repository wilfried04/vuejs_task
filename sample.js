Vue.component('todo-item', {
  template: '<li>This is a todo<li/>'
})

var app = new Vue({
  // By specifying the HTML id in this el, an instance of Vue.js is imported with the DOM of that id.
  el: '#app',
  // data is the attribute (value) of the defined Vue.js instance.
  data: {
    name: 'Oswald School',
    course: 'Web Engineering Course',
    acceptancePeriod: 'January 2020',
    defaultLastId: 3,
    
    students: [
      { id: 1, name: 'John Doe 1', course: 'WebDesigner', acceptancePeriod: 'March 2019' },
      { id: 2, name: 'Janne Doe 1', course: 'Machine learning', acceptancePeriod: 'December 2019' },
      { id: 3, name: 'John Janne', course: 'Web Engineer Course', acceptancePeriod: 'May 2020' }
    ],
    nextStudentId: 4,
  },
  // methodsに、Vue.jsのインスタンスに使用させたいメソッドを記載する
  methods: {
    addStudent: function() {
      this.students.push({
        id: this.nextStudentId++,
        name: this.name,
        course: this.course,
        acceptancePeriod: this.acceptancePeriod
      })
  }
}
})

