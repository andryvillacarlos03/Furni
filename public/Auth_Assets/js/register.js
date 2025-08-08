
import { setupLoader } from "./loader.js";

// Loader
setupLoader();

const inputEmail = document.getElementById('exampleInputEmail');
const result = document.getElementById('resultEmail');
let timeOut = null;
const registerBtn = document.getElementById('registerBtn');
let isEmailAvailable = false;
let doPasswordsMatch = false;

function validateFormState() {
    if (isEmailAvailable && doPasswordsMatch) {
        registerBtn.disabled = false;
    } else {
        registerBtn.disabled = true;
    }
}

inputEmail.addEventListener('input', () => {
    const email = inputEmail.value.trim();
    clearTimeout(timeOut);

    if (!email) {
        result.innerHTML = '';
        isEmailAvailable = false;
        validateFormState();
        return;
    }

    timeOut = setTimeout(async () => {
        try {
            const response = await fetch(`/register/email?email=${encodeURIComponent(email)}`);
            if (!response.ok) {
                result.innerHTML = '';
                isEmailAvailable = false;
                validateFormState();
                return;
            }

            const data = await response.json();
            if (data.exists) {
                result.innerHTML = '<span class="text-danger">Email is already taken.</span>';
                isEmailAvailable = false;
            } else {
                result.innerHTML = '<span class="text-success">Email is available.</span>';
                isEmailAvailable = true;
            }
        } catch (error) {
            result.innerHTML = '<span class="text-danger">Error checking email.</span>';
            isEmailAvailable = false;
        }

        validateFormState();
    }, 200);
});

const passwordInput = document.getElementById('exampleInputPassword');
const passwordConfirmInput = document.getElementById('exampleRepeatPassword');
const resultPassword = document.getElementById('resultPassword');
function validatePasswordMatch() {
    const pass = passwordInput.value;
    const confirm = passwordConfirmInput.value;

    if (!confirm) {
        resultPassword.innerHTML = '';
        doPasswordsMatch = false;
        validateFormState();
        return;
    }

    if (pass === confirm) {
        resultPassword.innerHTML = '<span class="text-success">Passwords match.</span>';
        doPasswordsMatch = true;
    } else {
        resultPassword.innerHTML = '<span class="text-danger">Passwords do not match.</span>';
        doPasswordsMatch = false;
    }

    validateFormState();
}

passwordInput.addEventListener('input', validatePasswordMatch);
passwordConfirmInput.addEventListener('input', validatePasswordMatch);

document.querySelectorAll('.toggle-password').forEach(icon => {
    icon.addEventListener('click', function () {
        const target = document.querySelector(this.getAttribute('toggle'));
        const isPassword = target.getAttribute('type') === 'password';

        target.setAttribute('type', isPassword ? 'text' : 'password');
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
});


document.addEventListener("DOMContentLoaded", async () => {
    const regionSelect = document.getElementById('region');
    const provinceSelect = document.getElementById('province');
    const citySelect = document.getElementById('city');
    const barangaySelect = document.getElementById('barangay');

    const fetchJSON = async (url) => {
        const response = await fetch(url);
        return await response.json();
    };

    // Load Regions
    const regions = await fetchJSON('https://psgc.gitlab.io/api/regions/');
    regions.forEach(region => {
        regionSelect.innerHTML += `<option value="${region.code}">${region.name}</option>`;
    });

    // Load Provinces when region selected
    regionSelect.addEventListener('change', async function () {
        provinceSelect.innerHTML = '<option value="">Select Province</option>';
        citySelect.innerHTML = '<option value="">Select City/Municipality</option>';
        barangaySelect.innerHTML = '<option value="">Select Barangay</option>';
        provinceSelect.disabled = true;
        citySelect.disabled = true;
        barangaySelect.disabled = true;

        if (!this.value) return;

        const provinces = await fetchJSON(`https://psgc.gitlab.io/api/regions/${this.value}/provinces/`);
        provinces.forEach(province => {
            provinceSelect.innerHTML += `<option value="${province.code}">${province.name}</option>`;
        });
        provinceSelect.disabled = false;
    });

    // Load Cities when province selected
    provinceSelect.addEventListener('change', async function () {
        citySelect.innerHTML = '<option value="">Select City/Municipality</option>';
        barangaySelect.innerHTML = '<option value="">Select Barangay</option>';
        citySelect.disabled = true;
        barangaySelect.disabled = true;

        if (!this.value) return;

        const cities = await fetchJSON(`https://psgc.gitlab.io/api/provinces/${this.value}/cities-municipalities/`);
        cities.forEach(city => {
            citySelect.innerHTML += `<option value="${city.code}">${city.name}</option>`;
        });
        citySelect.disabled = false;
    });

    // Load Barangays when city selected
    citySelect.addEventListener('change', async function () {
        barangaySelect.innerHTML = '<option value="">Select Barangay</option>';
        barangaySelect.disabled = true;

        if (!this.value) return;

        const barangays = await fetchJSON(`https://psgc.gitlab.io/api/cities-municipalities/${this.value}/barangays/`);
        barangays.forEach(brgy => {
            barangaySelect.innerHTML += `<option value="${brgy.code}">${brgy.name}</option>`;
        });
        barangaySelect.disabled = false;
    });
});






