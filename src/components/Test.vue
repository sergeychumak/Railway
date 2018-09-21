<template>
  <div
    :class="classObject"
  >
    {{showValue}}
  </div>
</template>
<script>
  export default {
    name: 'railway-lazy-number',
    data : function(){
      return {
        showValue: 0,

        distance: 0,
        step: 0,

        timeLazy: 500,

        oldValue: 0,
        newValue: 0


      }
    },
    props: {
      value: { type: Number },
      countStep: { type: Number, default: 10 }
    },
    computed: {
      classObject () {
        return [
          'railway lazy-number'
        ]
      },
      timerLazy () {
        return this.timeLazy / this.countStep
      }
    },
    methods: {
      runProcess: function(){
        setTimeout(() => {
          this.oldValue = this.oldValue + this.step;
          if ( this.step > 0 ) {
            if ( this.newValue >= this.oldValue ) {
              this.runProcess()
              this.showValue = Math.ceil(this.oldValue);
            }else{
              this.showValue = this.newValue
            }
          }else{
            if ( this.newValue <= this.oldValue ){
              this.runProcess()
              this.showValue = Math.ceil(this.oldValue);
            }else{
              this.showValue = this.newValue
            }
          }
        }, this.timerLazy );
      },
      setDistance: function(newValue, oldValue){
        this.distance = newValue - oldValue;
      },
      setStep: function(){
        this.step = this.distance / this.countStep;
      }
    },
    watch : {
      value : function(newValue, oldValue){
        this.oldValue = oldValue;
        this.newValue = newValue;
        this.setDistance(newValue, oldValue);
        this.setStep();
        this.runProcess();
      }
    }
  }
</script>
