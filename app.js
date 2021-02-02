let count= 0;

// select value buttons for the query selector

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        value.textContent = count;
        if(count<0){
            document.getElementById('value').style.color = 'red';
        }
    });
    btn.addEventListener("click", function(badhao){
        const styles = badhao.currentTarget.classList;
        if(styles.contains('increase')){
            count++;
        }
        value.textContent = count;
        if(count>0){
        document.getElementById('value').style.color = 'green';
    }
    });
    btn.addEventListener('click',function(resetkaro){
        const styles = resetkaro.currentTarget.classList;
        if(styles.contains('reset')){
            count=0;
        }
        value.textContent = count;
        if(count==0){
            document.getElementById('value').style.color = 'black';
        }
        // else{
        //     alert('Not A Number');
        // }
    });
});