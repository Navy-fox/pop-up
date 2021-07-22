export default {
    methods:{
        close(){
            this.$emit('close', false)
        },
        confirm() {
            this.$emit('close', true)
        }
    }
}