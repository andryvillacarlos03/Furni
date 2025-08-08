
export function setupLoader() {
    window.addEventListener('load', function () {
        document.getElementById('loader-wrapper').style.display = 'none';
    });

    const form = document.querySelector('form.user');
    if (form) {
        form.addEventListener('submit', function () {
            document.getElementById('loader-wrapper').style.display = 'flex';
        });
    }
}


setupLoader();
