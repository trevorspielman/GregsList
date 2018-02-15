function JobsController() {
    var jobsService = new JobsService()

    function drawJobs() {
        var jobsArr = jobsService.getJobs()
        var jobTemplate = ``
        var jobFormTemplate = `
    <div class="col-6 offset-6 d-flex justify-content-center">
    <form class="m-2" onsubmit="app.controllers.jobsCtrl.addJob(event)" id="job-form">
        <div class="form-row">
            <div class="col">
                <input type="text" name="title" placeholder="Title">
                <input type="number" name="pay" placeholder="Salary">
            </div>
            <div class="col">
                <input type="text" name="companyName" placeholder="Company Name">
                <input type="date" name="startDate" placeholder="Start Date">
            </div>
            <div class="col">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="time" value="0">
                    <label class="form-check-label" value="0">Full-Time</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="time" value="1">
                    <label class="form-check-label">Part-Time</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="time" value="2">
                    <label class="form-check-label">Contract</label>
                </div>
            </div>
            <div class="form-group">
            <textarea class="form-control" name="description" rows="3">Job Description</textarea>
          </div>
        </div>
        <button class="m-2 btn-success" type="submit">Submit</button>
    </form>
</div>
    `
        for (let i = 0; i < jobsArr.length; i++) {
            const job = jobsArr[i];
            jobTemplate += `
        <div class="col-3">
        <h3>${job.title}</h3>
        <h4>$${job.pay}</h4>
        <p>${job.description}</p>
        <p><strong>${job.companyName}</strong></p>
        <p>${job.startDate}</p>
    </div>
        `
        }
        document.getElementById('form').innerHTML = jobFormTemplate
        document.getElementById('listingBoard').innerHTML = jobTemplate
    }

    this.addJob = function addJob(event) {
        event.preventDefault()
        var form = event.target
        var jobObj = {
            title: form.title.value,
            pay: form.pay.value,
            time: form.time.value,
            description: form.description.value,
            companyName: form.companyName.value,
            startDate: form.startDate.value
        }
        jobsService.addJob(jobObj)
        document.getElementById('job-form').reset()
        drawJobs()
    }

    this.getJobs = function getJobs() {
        jobsService.getJobs()
        drawJobs()
    }


}