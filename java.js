const darkModeToggle = document.getElementById('darkModeToggle');
        
        
        const darkModeVariable = localStorage.getItem('darkMode') === 'enabled';

        if (darkModeVariable) {
            document.body.classList.add('dark-mode');
            darkModeToggle.textContent = '☀️ Light Mode';
        }

        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            const isEnabled = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isEnabled ? 'enabled' : 'disabled');
            
            darkModeToggle.textContent = isEnabled ? '☀️ Light Mode' : '🌙 Dark Mode';
        });