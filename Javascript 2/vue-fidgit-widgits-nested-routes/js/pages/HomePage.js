export default {
    template: `
    <div class="home-page">
        <h2 class="mb-3">Welcome</h2>
        <div class="container">
            <section class="py-5 text-center container-fluid">
                <div class="py-lg-5">
                    <div class="h1">Do you fidget?</div>
                    <p class="lead text-muted mt-5">Fidgit Widgits are here to help!</p>
                </div>
            </section>
        </div>
        
        <h3 class="my-3">How Can Fidgit Widgits Help?</h3>
        <div class="container">
            <!-- For educational purposes, content borrowed from: https://www.fundemoniumtoys.com/4-reasons-why-fidget-toys-are-helpful-for-kids/ -->
            <p class="my-4">While spinners, in particular, sparked a feisty debate on the benefits and downsides of fidget toys back in 2017, the focus was more on the distraction that these particular toys created in classrooms and elsewhere. Fidget toys in general, however, can provide several benefits for kids.</p>
            <div class="row row-cols-1 row-cols-md-2">
                <div class="col mb-4">
                    <div class="card benefit-1 h-100">
                        <div class="card-body">
                            <h5 class="card-title">Increased Focus and Concentration</h5>
                            <p class="card-text">Research has shown that when kids can control or direct their movements, especially when stressed or anxious, they can also improve focus and concentration. Movement and sensory input are essential for learning and carrying out tasks since they involve both the right and left hemispheres of the brain.</p>
                            <p class="card-text">In addition, case studies have shown that learning can be improved with fidget toys. For example, a study focusing on showing the impact of fidget toys concluded that students given stress balls had improved scholastic achievement, especially <a href="https://www.flushinghospital.org/newsletter/can-fidget-toys-help-your-childs-ability-to-focus/">students with ADHD</a>.</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card benefit-2 h-100">
                        <div class="card-body">
                            <h5 class="card-title">Create Movement for Stimulating the Brain Stem</h5>
                            <p class="card-text">One of the main functions of the brain stem is to control basic body functions such as breathing, heart rate, and consciousness. And whether one is awake or sleepy. Some children’s brains can wake up but not sustain alertness, while some kids need a bit of help to even awaken.</p>
                            <p class="card-text">Movement is a fundamental way to trigger the brain stem and fidget toys can serve that purpose. Movement, even fidgeting with the hands, can help by sending signals from the body to the brain to awaken and be alert.</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card benefit-3 h-100">
                        <div class="card-body">
                            <h5 class="card-title">Provide Fun Mental Occupation</h5>
                            <p class="card-text">Fidget toys serve to productively distract and occupy a child’s attention. In addition to boosting focus and productivity, by giving your child’s mind a bit of a fun mental break thereby making it easier to pay attention afterward.</p>
                            <p class="card-text">In addition, they are fun! As every parent and teacher knows, kids need to break up their work and study times with some free play of some sort. And fidget toys can provide an easy, simple to use and contain toy to make that happen.</p>
                        </div>
                    </div>
                </div>
                 <div class="col mb-4">
                    <div class="card benefit-4 h-100">
                        <div class="card-body">
                            <h5 class="card-title">Reduce Stress and Anxiety</h5>
                            <p class="card-text">While anxiety, stress, and even learning disorders such as ADHD can affect the entire body, they most notably affect the hands and fingers. Heightened anxiety in a child can result in restlessness, shaking, and even cramping in the hands and fingers.</p>
                            <p class="card-text">Fidget toys also have the capacity to be good objects of focus for mindfulness meditations, and if they encourage meditation in those who would not normally engage in meditation, this can be considered a benefit of the toy itself!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <h3 class="my-3">Find Your Fidgit Widgit</h3>
        <div class="container">
            <section class="py-5 text-center container-fluid">
                <div class="py-lg-5">
                    <div class="h2">We have a Fidgit Widgit for everyone!</div>
                    <router-link to="products" class="btn btn-primary btn-lg mt-5">Find Your Fidgit Widgit</router-link>
                </div>
            </section>
        </div>
    </div>
  `
};
