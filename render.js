function interviewRender(){
    interviewedCard.innerHTML= ``;
    for(let card of interviewList){
        let div = document.createElement('div');
        div.className = 'card flex flex-col gap-5 p-6 border border-[#d2d2d2] bg-[#FFFFFF]';
        div.innerHTML =  `
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="job-name text-[18px] font-bold text-[#002C5C] mb-1">${card.jobName}</h3>
                                <p class="subtitle mb-2 text-[16px] text-[#64748B]">${card.subTitle}</p>
                            </div>
                            <div class="delete-icon p-2 border border-[#d2d2d2] rounded-full"><i
                                    class="fa-regular fa-trash-can"></i>
                            </div>
                        </div>
                        <p class="mb-2 text-[14px] text-[#64748B]"><span class="job-type">${card.jobType}</span> • <span
                                class="job-level">${card.jobLavel}</span> • <span class="job-salary">${card.jobSalary}</span>
                        </p>
                        <div>
                            <button class="stats btn btn-soft">Interview</button>
                            <p class=" description mt-2 text-[14px] text-[#323B49]">${card.description}
                            </p>
                        </div>
                        <div class="flex gap-2 items-center justify-start">
                            <button class="interview-btn btn btn-outline btn-success">Interview</button>
                            <button class="reject-btn btn btn-outline btn-error">Rejected</button>
                        </div>`

        interviewedCard.append(div);
    }
    interviewCount.innerText = interviewList.length;

}

function rejectRender(){
    rejectedCard.innerHTML= ``;
    for(let card of rejectList){
        let div = document.createElement('div');
        div.className = 'card flex flex-col gap-5 p-6 border border-[#d2d2d2] bg-[#FFFFFF]';
        div.innerHTML =  `
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="job-name text-[18px] font-bold text-[#002C5C] mb-1">${card.jobName}</h3>
                                <p class="subtitle mb-2 text-[16px] text-[#64748B]">${card.subTitle}</p>
                            </div>
                            <div class="delete-icon p-2 border border-[#d2d2d2] rounded-full"><i
                                    class="fa-regular fa-trash-can"></i>
                            </div>
                        </div>
                        <p class="mb-2 text-[14px] text-[#64748B]"><span class="job-type">${card.jobType}</span> • <span
                                class="job-level">${card.jobLavel}</span> • <span class="job-salary">${card.jobSalary}</span>
                        </p>
                        <div>
                            <button class="stats btn btn-soft">Rejected</button>
                            <p class=" description mt-2 text-[14px] text-[#323B49]">${card.description}
                            </p>
                        </div>
                        <div class="flex gap-2 items-center justify-start">
                            <button class="interview-btn btn btn-outline btn-success">Interview</button>
                            <button class="reject-btn btn btn-outline btn-error">Rejected</button>
                        </div>`

        rejectedCard.append(div);
    }
    rejectedCount.innerText = rejectList.length;

}

