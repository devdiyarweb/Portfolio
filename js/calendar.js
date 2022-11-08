var Cal = function(divId) {
    this.divId = divId;
    this.daysOfWeek = ['Пн','Вт','Ср','Чв','Пн','Сб','Вс'];
    this.month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    var date = new Date();
    this.currMonth = date.getMonth()
    this.currYear = date.getFullYear();
    this.currDay = date.getDate();
};
Cal.prototype.nextMonth = function(){
    if (this.currMonth == 11) {
        this.currMonth = 0;
        this.currYear = this.currYear + 1
    }
}