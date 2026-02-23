let jobs = [
            {
                id: 1,
                company: "Mobile First Corp",
                role: "React Native Developer",
                type: "Remote • Full-time",
                salary: "$130,000 - $175,000",
                desc: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
                status: "not applied"
            },
            {
                id: 2,
                company: "WebFlow Agency",
                role: "Web Designer & Developer",
                type: "Los Angeles, CA • Part-time",
                salary: "$80,000 - $120,000",
                desc: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
                status: "not applied"
            },
            
            {
                id: 3,
                company: "FinTech Innovators",
                role: "Backend Engineer",
                type: "New York, NY • Full-time",
                salary: "$120,000 - $160,000",
                desc: "Design and implement scalable backend systems for our financial products. Experience with microservices and cloud infrastructure is a plus.",
                status: "not applied"
            },
            {
                id: 4,
                company: "HealthTech Solutions",
                role: "Data Scientist",
                type: "Remote • Contract",
                salary: "$100,000 - $140,000",
                desc: "Analyze healthcare data to derive insights and build predictive models. Experience with machine learning and healthcare datasets preferred.",
                status: "not applied"
            },
            {
                id: 5,
                company: "E-commerce Giant",
                role: "Frontend Developer",
                type: "Seattle, WA • Full-time",
                salary: "$110,000 - $150,000",
                desc: "Develop user-friendly interfaces for our e-commerce platform. Proficiency in React and modern frontend technologies required.",
                status: "not applied"
            },
                {
                    id: 6,
                    company: "AI Startup",
                    role: "Machine Learning Engineer",
                    type: "San Francisco, CA • Full-time",
                    salary: "$130,000 - $180,000",
                    desc: "Build and deploy machine learning models for our AI-driven products. Experience with deep learning frameworks is a plus.",
                    status: "not applied"
                },
                {
                    id: 7,
                    company: "Cybersecurity Firm",
                    role: "Security Analyst",
                    type: "Remote • Full-time",
                    salary: "$90,000 - $130,000",
                    desc: "Monitor and analyze security threats to protect our clients' data. Experience with SIEM tools and incident response is preferred.",
                    status: "not applied"
                },
                {
                    id: 8,
                    company: "Gaming Company",
                    role: "Game Developer",
                    type: "Austin, TX • Full-time",
                    salary: "$100,000 - $150,000",
                    desc: "Design and develop engaging games for various platforms. Experience with Unity or Unreal Engine is required.",
                    status: "not applied"
                }   
        ];
        let currentFilter = 'all';

        function updateUI() {
            const container = document.getElementById('jobs-container');
            const emptyState = document.getElementById('empty-state');
            
            // Filter logic
            const filtered = jobs.filter(job => {
                if (currentFilter === 'all') return true;
                return job.status === currentFilter;
            });

            // Update Counts
            document.getElementById('total-count').innerText = jobs.length;
            document.getElementById('interview-count').innerText = jobs.filter(j => j.status === 'interview').length;
            document.getElementById('rejected-count').innerText = jobs.filter(j => j.status === 'rejected').length;
            document.getElementById('job-tally').innerText = `${filtered.length} jobs`;

            // Clear and Render
            container.innerHTML = '';
            
            if (filtered.length === 0) {
                emptyState.classList.remove('hidden');
            } else {
                emptyState.classList.add('hidden');
                filtered.forEach(job => {
                    container.innerHTML += `
                        <div class="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative group animate-in fade-in duration-300">
                            <button onclick="deleteJob(${job.id})" class="absolute top-6 right-6 p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors border border-slate-100">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                            
                            <h3 class="text-xl font-bold text-[#0f2d52] mb-1">${job.company}</h3>
                            <p class="text-slate-400 mb-4 font-medium">${job.role}</p>
                            
                            <div class="text-slate-400 text-sm mb-6 flex gap-2">
                                <span>${job.type}</span>
                                <span>•</span>
                                <span>${job.salary}</span>
                            </div>

                            <div class="mb-6">
                                <span class="bg-blue-50 text-[#0f2d52] text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider">
                                    ${job.status.replace('-', ' ')}
                                </span>
                            </div>

                            <p class="text-slate-600 text-sm mb-8 leading-relaxed">${job.desc}</p>

                            <div class="flex gap-3">
                                <button onclick="setStatus(${job.id}, 'interview')" class="border border-emerald-400 text-emerald-500 hover:bg-emerald-50 px-4 py-2 rounded-md text-xs font-bold uppercase transition">Interview</button>
                                <button onclick="setStatus(${job.id}, 'rejected')" class="border border-red-400 text-red-400 hover:bg-red-50 px-4 py-2 rounded-md text-xs font-bold uppercase transition">Rejected</button>
                            </div>
                        </div>
                    `;
                });
            }
        }

        function filterJobs(filter) {
            currentFilter = filter;
            // Update button styles
            document.querySelectorAll('.filter-btn').forEach(btn => {
                if(btn.dataset.filter === filter) {
                    btn.classList.add('bg-blue-600', 'text-white', 'shadow-md');
                    btn.classList.remove('bg-white', 'text-slate-500', 'border-slate-200');
                } else {
                    btn.classList.remove('bg-blue-600', 'text-white', 'shadow-md');
                    btn.classList.add('bg-white', 'text-slate-500', 'border-slate-200');
                }
            });
            updateUI();
        }

        function setStatus(id, status) {
            const job = jobs.find(j => j.id === id);
            if (job) job.status = status;
            updateUI();
        }

        function deleteJob(id) {
            jobs = jobs.filter(j => j.id !== id);
            updateUI();
        }

        // Initial Render
        updateUI();
  