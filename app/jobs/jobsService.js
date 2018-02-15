function JobsService() {
    var jobs = []
    var times = ['Full-Time', 'Part-Time', 'Contract']

    function Job(title, pay, time, description, companyName, startDate){
        this.title = title
        this.pay = pay
        this.time = times[time]
        this.description = description
        this.companyName = companyName
        this.startDate = startDate
    }

    this.getJobs = function getJobs(){
        return JSON.parse(JSON.stringify(jobs))
    }

    this.addJob = function addJob(jobObj){
        var newJob = new Job(jobObj.title, jobObj.pay, jobObj.time, jobObj.description, jobObj.companyName, jobObj.startDate)
        jobs.push(newJob)
    }

    jobs.push(new Job("CEO", 1000000, "Full-Time", "This is the best job ever because you don't have to do anything!!!", "TSpiel LLC", "2018-02-15"))
    jobs.push(new Job("CEO", 1000000, "Full-Time", "This is the best job ever because you don't have to do anything!!!", "TSpiel LLC", "2018-02-15"))
    jobs.push(new Job("CEO", 1000000, "Full-Time", "This is the best job ever because you don't have to do anything!!!", "TSpiel LLC", "2018-02-15"))
    jobs.push(new Job("CEO", 1000000, "Full-Time", "This is the best job ever because you don't have to do anything!!!", "TSpiel LLC", "2018-02-15"))
}