// Get all needed element

let interviewList = [];
let rejectedList = [];

let allCount = document.getElementById('all-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
let jobCount = document.getElementById('job-count');

const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');

const allCards = document.getElementById('cards');

const filteredCard = document.getElementById('filtered-card');

// Set the counter number

allCount.innerText = allCards.children.length;
jobCount.innerText = allCards.children.length;
rejectedCount.innerText = rejectedList.length;

// Toggle button

function toggleBtn(id) {
    allBtn.classList.remove('btn-active');
    interviewBtn.classList.remove('btn-active');
    rejectedBtn.classList.remove('btn-active');


    const selected = document.getElementById(id);
    selected.classList.add('btn-active');

    if(id === 'interview-btn'){
        filteredCard.classList.remove('hidden');
        allCards.classList.add('hidden');
    }
    else if (id === 'all-btn'){
         filteredCard.classList.add('hidden');
        allCards.classList.remove('hidden');
    }
}

allCards.addEventListener('click', function (event) {

   if(event.target.classList.contains("interview-btn")){
     const parentNode = event.target.parentNode.parentNode;
    const jobName = parentNode.querySelector('.job-name').innerText;
    const subTitle = parentNode.querySelector('.subtitle').innerText;
    const jobType = parentNode.querySelector('.job-type').innerText;
    const jobLavel = parentNode.querySelector('.job-level').innerText;
    const jobSalary = parentNode.querySelector('.job-salary').innerText;
    const stats = parentNode.querySelector('.stats').innerText;
    const description = parentNode.querySelector('.description').innerText;

    const cardInfo = {
        jobName,
        subTitle,
        jobType,
        jobLavel,
        jobSalary,
        stats,
        description
    };

    const cardExist = interviewList.find(item=>item.jobName === cardInfo.jobName);
    parentNode.querySelector('.stats').innerText = 'Interview';
    if(!cardExist){
        interviewList.push(cardInfo);
    }

    renderInterview()

   }
})

function renderInterview(){
    filteredCard.innerHTML = ``
    for(let interviewCard of interviewList){
        let div =document.createElement('div');
        div.className = 'card flex flex-col gap-5 p-6 border border-[#d2d2d2] bg-[#FFFFFF]';
        div.innerHTML =`
            <div class="flex justify-between items-start">
                        <div>
                            <h3 class="job-name text-[18px] font-bold text-[#002C5C] mb-1">${interviewCard.jobName}</h3>
                            <p class="subtitle mb-2 text-[16px] text-[#64748B]">${interviewCard.subTitle}</p>
                        </div>
                        <div id="delete-icon" class="p-2 border border-[#d2d2d2] rounded-full"><i class="fa-regular fa-trash-can"></i>
                        </div>
                    </div>
                    <p class="mb-2 text-[14px] text-[#64748B]"><span class="job-type">${interviewCard.jobType}</span> • <span
                        class="job-level">${interviewCard.jobLavel}</span> • <span class="job-salary">${interviewCard.jobSalary}</span></p>
                    <div>
                        <button class="stats btn btn-soft">Interview</button>
                        <p class=" description mt-2 text-[14px] text-[#323B49]">${interviewCard.description}</p>
                    </div>
                    <div class="flex gap-2 items-center justify-start">
                        <button class="btn btn-outline btn-success">Interview</button>
                        <button class="btn btn-outline btn-error">Rejected</button>
                    </div>
        `
        filteredCard.appendChild(div);
    }
    interviewCount.innerText = interviewList.length;
    jobCount.innerText = interviewList.length;
}


console.log(interviewList);
