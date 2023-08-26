const addProjects = (projects) => {
    const content = document.querySelector(".sectionProjetsTableau"); // Container parent des projets

    const modale = document.querySelector(".modal"); // La modale

    projects.forEach((project) => {
        let projectName = project.name;
        let projectCover = project.cover_url;
        let projectContext = project.contexte;
        let projectDesc = project.description;
        let projectImagesTab = project.images_url;
        let projectTech = project.technologies;

        // Contenu de la modale
        const modalName = document.querySelector(".modalName");
        const modalContext = document.querySelector(".modalContext");
        const modalDesc = document.querySelector(".modalDesc");
        const modalClose = document.querySelector(".modalClose");
        const overlay = document.querySelector(".overlay");

        const projectCard = document.createElement("div");
        projectCard.classList.add("card", "sm2:w-45vw", "pc:w-25vw", "pcXl:w-14vw");

        const projectCardContainer = document.createElement("div");
        projectCardContainer.classList.add("cardContainer","hover:cursor-pointer","text-gray-700","dark:text-gray-400","focus:bg-black","hover:bg-black","focus:border-black","hover:border-black","focus:border","hover:border","focus:text-white","hover:text-white","dark:focus:bg-white","dark:hover:bg-white","dark:focuse:border-white","dark:hover:border-white","dark:focus:text-slate-800","dark:hover:text-slate-800","mt-4","focus:transition-all","hover:transition-all");
        projectCardContainer.setAttribute("tabindex", "0");

        projectCardContainer.innerHTML = `<img class="border border-gray-700 dark:border-gray-400" src="${projectCover}" alt="image dans lequel il est écrit exemple projet">`;

        const projectCardContainerTitleBox = document.createElement("div");
        projectCardContainerTitleBox.classList.add("flex","content-center","justify-between","px-2","py-1");
        projectCardContainerTitleBox.innerHTML = `<h3 class="text-xl font-medium ">${projectName}</h3> <span class="material-symbols-outlined flex content-center font-medium">add</span>`;

        projectCard.appendChild(projectCardContainer);
        projectCardContainer.appendChild(projectCardContainerTitleBox);
        content.appendChild(projectCard);

        projectCard.addEventListener("click", openModal);

        function openModal() {
            let carrouselIndex = 0;
            const modalCarrousel = document.querySelector(".modaleMainImage");
            const modalCarrComPrec = document.querySelector(".modaleMainCarrouselCommandPrec");
            const modalCarrComNext = document.querySelector(".modaleMainCarrouselCommandNext");

            modale.classList.remove("hidden");
            overlay.classList.remove("hidden");
            modalName.textContent = projectName;
            modalContext.textContent = projectContext;
            modalDesc.textContent = projectDesc;

            if (projectImagesTab.length < 2) {
                modalCarrComPrec.classList.add("hidden");
                modalCarrComNext.classList.add("hidden");
            }            

            function carrConverter(index) {
                modalCarrousel.src = projectImagesTab[index];
            }

            const handleModalCarrouselPrec = () => {
                carrouselIndex--;
                if (carrouselIndex < 0) {
                    carrouselIndex = projectImagesTab.length - 1;
                }
                carrConverter(carrouselIndex);
            };

            const handleModalCarrouselNext = () => {
                carrouselIndex++;
                if (carrouselIndex >= projectImagesTab.length) {
                    carrouselIndex = 0;
                }
                carrConverter(carrouselIndex);
            };

            function closeModal() {
                modale.classList.add("hidden");
                overlay.classList.add("hidden");
                modalCarrComPrec.classList.remove("hidden");
                modalCarrComNext.classList.remove("hidden");

                modalCarrComPrec.removeEventListener("click", handleModalCarrouselPrec);
                modalCarrComNext.removeEventListener("click", handleModalCarrouselNext);
            }

            function afficherLogos(tableau) {
                const modalOutils = document.querySelector(".outils");
                modalOutils.innerHTML = '';

                tableau.forEach((item) => {
                    const logo = document.createElement('img');
                    logo.src = getLogo(item);
                    logo.alt = getLogoAltText(item);
                    modalOutils.appendChild(logo);
                });
            }

            function getLogo(item) {
                if (item.includes('HTML')) {
                    return '../img/logos/htmlPNG.png';
                } else if (item.includes('CSS')) {
                    return '../img/logos/cssPNG.png';
                } else if (item.includes('JS')) {
                    return '../img/logos/jsPNG.png';
                } else if (item.includes('SASS')) {
                    return '../img/logos/sassPNG.png';
                } else if (item.includes('FIGMA')) {
                    return '../img/logos/figmaPNG.png';
                }
                return '';
            }

            function getLogoAltText(item) {
                if (item.includes('figma')) {
                    return 'Figma';
                } else if (item.includes('HTML')) {
                    return 'HTML';
                } else if (item.includes('CSS')) {
                    return 'CSS';
                } else if (item.includes('SASS')) {
                    return 'Sass';
                } else if (item.includes('JS')) {
                    return 'JavaScript';
                } else if (item.includes('FIGMA')) {
                    return 'Figma';
                } 
                return ''; // Retourne une chaîne vide si aucun logo correspondant n'est trouvé
            }

            modalCarrComPrec.addEventListener("click", handleModalCarrouselPrec);
            modalCarrComNext.addEventListener("click", handleModalCarrouselNext);
            modalClose.addEventListener("click", closeModal);
            overlay.addEventListener("click", closeModal);

            carrConverter(carrouselIndex);
            afficherLogos(projectTech);
        }
    });
};

const getProjects = () => {
    fetch("../data/projets.json")
    .then((data) => data.json())
    .then((data) => addProjects(data));
};

getProjects();
