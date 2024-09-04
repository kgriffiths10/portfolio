$(document).ready(function() {
    function initializeSlider(sectionId, data) {
        const $mainSlider = $(`#${sectionId} .main-slider`);
        const $thumbnailSlider = $(`#${sectionId} .thumbnail-slider`);

        // Clear existing content
        $mainSlider.empty();
        $thumbnailSlider.empty();

        // Determine link text based on section
        const linkText = sectionId === 'uiux-projects-section' ? 'View Project' : 'View Code';

        // Populate sliders with data
        data.forEach(function(project) {
            $thumbnailSlider.append(`
                <div class="thumbnail-slide">
                    <div class="highlighted-subheading">
                        <h4>${project.title}</h4>
                    </div>
                </div>
            `);
            $mainSlider.append(`
                <div class="main-slide">
                    <article>
                        <div class="featured-tech-title">Featured Tech</div>
                        <ul class="featured-tech-list">
                            ${project.featuredTech.map(tech => `<li>${tech}</li>`).join('')}
                        </ul>
                        <div class="description">${project.description}</div>
                        <a class="project-link" href="${project.link}">${linkText}</a>
                    </article>
                </div>
            `);
        });

        // Initialize the sliders
        $mainSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: `#${sectionId} .thumbnail-slider`,
            dots: true
        });

        $thumbnailSlider.slick({
            slidesToScroll: 1,
            asNavFor: `#${sectionId} .main-slider`,
            focusOnSelect: true,
            centerMode: false,
            centerPadding: '0',
            arrows: false,
            dots: false,
            variableWidth: true
        });
    }

    $.getJSON('projects.json', function(data) {
        // Initialize dev projects slider
        initializeSlider('dev-projects-section', data.devProjects);
        
        // Initialize UI/UX projects slider
        initializeSlider('uiux-projects-section', data.uiuxProjects);
    });
});

