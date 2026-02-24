const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');
const notFound = document.getElementById('not-found');

function toggle(id) {
    allBtn.classList.remove('btn-active');
    interviewBtn.classList.remove('btn-active');
    rejectedBtn.classList.remove('btn-active');

    const selected = document.getElementById(id);
    selected.classList.add('btn-active')

    if (id === 'all-btn') {
        rejectedCard.classList.add('hidden');
        interviewedCard.classList.add('hidden');
        allCards.classList.remove('hidden');
        if (allCards.children.length === 0){
            allCards.classList.add('hidden');
            notFound.classList.remove('hidden');
        }
        else{
            notFound.classList.add('hidden');
        }
        jobCount.innerText = allCards.children.length;
    }

    else if (id === 'interview-btn') {
        rejectedCard.classList.add('hidden');
        interviewedCard.classList.remove('hidden');
        allCards.classList.add('hidden');
        jobCount.innerText = interviewList.length;
        if (interviewList.length === 0){
            interviewedCard.classList.add('hidden');
            notFound.classList.remove('hidden');
        }
        else{
            notFound.classList.add('hidden');
        }
    }

    else if (id === 'rejected-btn') {
        rejectedCard.classList.remove('hidden');
        interviewedCard.classList.add('hidden');
        allCards.classList.add('hidden');
        jobCount.innerText = rejectList.length;
        if (rejectList.length === 0){
            rejectedCard.classList.add('hidden');
            notFound.classList.remove('hidden');
        }
        else{
            notFound.classList.add('hidden');
        }
    }
}