// Get all needed things

const allCount = document.getElementById('all-count');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('rejected-count');
const jobCount = document.getElementById('job-count');

const allCards = document.getElementById('cards');
const interviewedCard = document.getElementById('interviewed-card');
const rejectedCard = document.getElementById('rejected-card');


// Create array

let interviewList = [];
let rejectList = [];

// Set Counter

allCount.innerText = allCards.children.length;
interviewCount.innerText = interviewList.length;
rejectedCount.innerText = rejectList.length;
jobCount.innerText = allCards.children.length;


// Create Filtering Funtion

function filter(name) {
    name.addEventListener('click', function (event) {

        if (event.target.classList.contains("interview-btn")) {
            const parentNode = event.target.parentNode.parentNode;
            const jobName = parentNode.querySelector('.job-name').innerText;
            const subTitle = parentNode.querySelector('.subtitle').innerText;
            const jobType = parentNode.querySelector('.job-type').innerText;
            const jobLavel = parentNode.querySelector('.job-level').innerText;
            const jobSalary = parentNode.querySelector('.job-salary').innerText;
            const description = parentNode.querySelector('.description').innerText;

            const cardInfo = {
                jobName,
                subTitle,
                jobType,
                jobLavel,
                jobSalary,
                description
            }

            rejectList = rejectList.filter(item => item.jobName !== jobName);

            const cardExist = interviewList.find(item => item.jobName === cardInfo.jobName);
            if (!cardExist) {
                interviewList.push(cardInfo);
            }


            parentNode.querySelector('.stats').innerText = 'Interview';
            interviewRender()
            rejectRender()
        }

        if (event.target.classList.contains("reject-btn")) {
            const parentNode = event.target.parentNode.parentNode;
            const jobName = parentNode.querySelector('.job-name').innerText;
            const subTitle = parentNode.querySelector('.subtitle').innerText;
            const jobType = parentNode.querySelector('.job-type').innerText;
            const jobLavel = parentNode.querySelector('.job-level').innerText;
            const jobSalary = parentNode.querySelector('.job-salary').innerText;
            const description = parentNode.querySelector('.description').innerText;

            const cardInfo = {
                jobName,
                subTitle,
                jobType,
                jobLavel,
                jobSalary,
                description
            }

            interviewList = interviewList.filter(item => item.jobName !== jobName);

            const cardExist = rejectList.find(item => item.jobName === cardInfo.jobName);
            if (!cardExist) {
                rejectList.push(cardInfo);
            }

            parentNode.querySelector('.stats').innerText = 'Rejected';
            rejectRender()
            interviewRender()
        }

        if (event.target.classList.contains("delete-icon")) {
            const parentNode = event.target.parentNode.parentNode;
            const jobName = parentNode.querySelector('.job-name').innerText;

            interviewList = interviewList.filter(item => item.jobName !== jobName);
            rejectList = rejectList.filter(item => item.jobName !== jobName);

            parentNode.remove();

        }
            allCount.innerText = allCards.children.length;
            interviewCount.innerText = interviewList.length;
            rejectedCount.innerText = rejectList.length;
        
    })
}


filter(allCards);
filter(interviewedCard);
filter(rejectedCard);






