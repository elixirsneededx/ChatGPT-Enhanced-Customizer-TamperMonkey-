// ==UserScript==
// @name         ChatGPT Enhanced Customizer
// @namespace    https://github.com/elixirsneededx/ChatGPT-Enhanced-Customizer-TamperMonkey-
// @version      2.5
// @description  Customize ChatGPT with advanced background, UI styling, text controls, and presets
// @license      MIT
// @copyright    2024, elixirsneededx (https://github.com/elixirsneededx) @elixirsneededx on discord.
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAH1UExURUxpcXeqn3WqnHWonHSpnHWonHWpnG22knWpnHWpnHSmm3apm3SpnHWonHWpnHSonHWpnHWpm3apnXWpnHWpm3WpnP///8fc19fm43mrn67Nxf7///r8+6HFvNPk4JS8ssXb1XirnsDY0sPa1Pj7+qbHv5i/tXeqnvz9/X6uoo65roq2q+Tu7P3+/qrKwqDEu9bm4vP39qfIwPv9/NXl4ezz8Xqsn+nx73msn5/Dusnd2N7q59zp5pC6r4CwpKLFvIOxpszf2oSypsTa1fn7+/P49t/r6JrAt8LZ1L/X0d3q53aqnczf287h3Ie0qc7g3Pr8/LTQybDOxpvBuObv7c/h3PX5+Ory8ODr6OPt65G7sLnTzYWzp/n7+oi1qv7+/tTk4J7Cucve2Z3Cub7X0H+vo8LZ053CuKnJwff6+tnn4/3+/fD29XytoYWzqJe+tJa+tHapnHeqnaHEu8vf2oGxpazLw3utoMre2ZW9s7XRyu/19H2uou/186XHv6jJwNDi3sjd2OLt6u308ufw7tfm4rjTzK3MxOjw7tvp5dHi3sjd15m/tvL39q/Nxvb5+OPu64y3rIOyptnn5LbSy+Ds6eHs6tbl4cHZ0/v8/H6vo4GwpZ7Dus/h3fb6+ZK7sfT49/f6+aLFvavLw6zLxM3g28bc1pQLf2QAAAAVdFJOUwAtv5bz1PQH/dUuj5WQ/CyYwJHykqKEGP8AAAAJcEhZcwAAAHYAAAB2AU57JggAAAIcSURBVDjLhdNle9swEABgFdK0Kw7uHMfp6iTeAksaThpoUmZuV1x5zMxbx8wM7Xj7nZNjx/L2rNl9kXR6H51snwmhsWFTWQn8FSWGygKihLGmFP4ZpUXG7P5GWDcKZVEDeaKC1mfnHxUvoSV19YQOVFWTLdpiUfJ2POx/jOEzAy4tWU7KctPG95FpOjT0IA2PT80aSHEOpKQ5mSUxIA7bD2OzI5vdTNTt1QXBDvAxMT/7qkE+h8PdyoYC+DX0YgYyX4W+FwBunqYOhpp0YAl/1eN22Or5DPD8Jd6sBTiOZgYa8SfUysAMH+wWW/AK3ndbUWRADKUVMGIex1YrRGcs3uvYxcCzKVCAJTb66FZsFGDXTgHPMjD2WgWcFeCkHd/uoOshj0MD16QoLOI2+Q406ifpPXh4gisaOIXD4JiZXUoqwARx/Ab80zB7TJMzmK17nr4BK2eCOnocJGMMBBH9tO6FqYhveUJSwZsxBrpRDDltl6G3G7/8+K6AtLOZARu65hYwcLfL8s4l30EGCTzGwH6MA3Tew9u0Tp1HBmYOT+u+xZ62nl4AB91uGRQ+ZWAZ53HQqgMwgn3n6BC90+bl0nLJB51qH+QaphUD3EWuHVNuuhiQwlrPaS3n6zhEW+2G3I3TkSE3A5XalG860o/j/sSkcGAf62tS8MdvFfe3Oyf2tugyhBRB3qC/XuF/ADFWVOUHhFSXG4rXA78BYbiLJDUXqsMAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII=
// @author       @elixirsneededx on discord
// @match        http*://chat.openai.com/*
// @match        http*://chatgpt.com/*
// @connect      greasyfork.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const panel = document.createElement('div');
    panel.style.position = 'fixed';
    panel.style.top = '10px';
    panel.style.right = '10px';
    panel.style.padding = '15px';
    panel.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    panel.style.borderRadius = '12px';
    panel.style.color = 'white';
    panel.style.zIndex = '9999';
    panel.style.fontFamily = 'Arial, sans-serif';
    panel.style.width = '300px';
    panel.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';

    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px';
    closeButton.style.right = '10px';
    closeButton.style.backgroundColor = 'transparent';
    closeButton.style.border = 'none';
    closeButton.style.color = 'white';
    closeButton.style.fontSize = '16px';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', () => {
        panel.style.display = 'none';
        reopenButton.style.display = 'block';
    });
    panel.appendChild(closeButton);

    const title = document.createElement('h3');
    title.textContent = 'ChatGPT Enhanced Customizer';
    title.style.marginBottom = '15px';
    title.style.textAlign = 'center';
    title.style.fontSize = '18px';
    title.style.color = '#ff00ff';
    panel.appendChild(title);

    const UITextColorLabel = document.createElement('label');
    UITextColorLabel.textContent = 'UI Text Color:';
    UITextColorLabel.style.display = 'block';
    UITextColorLabel.style.marginTop = '10px';
    panel.appendChild(UITextColorLabel);

    const UITextColorInput = document.createElement('input');
    UITextColorInput.type = 'color';
    UITextColorInput.value = '#ffffff';
    panel.appendChild(UITextColorInput);

    const backgroundColorLabel = document.createElement('label');
    backgroundColorLabel.textContent = 'Background Color:';
    backgroundColorLabel.style.display = 'block';
    backgroundColorLabel.style.marginTop = '10px';
    panel.appendChild(backgroundColorLabel);

    const backgroundColorInput = document.createElement('input');
    backgroundColorInput.type = 'color';
    backgroundColorInput.value = '#000000';
    panel.appendChild(backgroundColorInput);

    const fontLabel = document.createElement('label');
    fontLabel.textContent = 'Font:';
    fontLabel.style.display = 'block';
    fontLabel.style.marginTop = '10px';
    panel.appendChild(fontLabel);

    const fontSelect = document.createElement('select');
    fontSelect.style.backgroundColor = 'black';
    fontSelect.style.color = 'white';
    fontSelect.style.border = '1px solid #ffffff';
    fontSelect.style.padding = '5px';
    fontSelect.style.width = '100%';
    fontSelect.style.borderRadius = '4px';
    fontSelect.style.fontFamily = 'Arial, sans-serif';

    const fonts = ['Arial', 'Comic Sans MS', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana', 'Algerian'];
    fonts.forEach((font) => {
        const option = document.createElement('option');
        option.value = font;
        option.textContent = font;
        option.style.fontFamily = font;
        fontSelect.appendChild(option);
    });
    panel.appendChild(fontSelect);

    const chatFontSizeLabel = document.createElement('label');
    chatFontSizeLabel.textContent = 'Chat Font Size:';
    chatFontSizeLabel.style.display = 'block';
    chatFontSizeLabel.style.marginTop = '10px';
    panel.appendChild(chatFontSizeLabel);

    const chatFontSizeInput = document.createElement('input');
    chatFontSizeInput.type = 'range';
    chatFontSizeInput.min = '10';
    chatFontSizeInput.max = '36';
    chatFontSizeInput.value = '16';
    chatFontSizeInput.style.width = '100%';
    panel.appendChild(chatFontSizeInput);

    const applyButton = document.createElement('button');
    applyButton.textContent = 'Apply';
    applyButton.style.display = 'block';
    applyButton.style.marginTop = '15px';
    applyButton.style.width = '100%';
    applyButton.style.backgroundColor = '#ff00ff';
    applyButton.style.color = 'white';
    applyButton.style.padding = '10px';
    applyButton.style.border = 'none';
    applyButton.style.cursor = 'pointer';
    applyButton.style.fontSize = '16px';
    applyButton.style.borderRadius = '4px';
    applyButton.addEventListener('click', () => {
        document.body.style.backgroundColor = backgroundColorInput.value;
        document.body.style.color = UITextColorInput.value;
        document.body.style.fontFamily = fontSelect.value;
        document.querySelector('.chat-box').style.fontSize = chatFontSizeInput.value + 'px';
    });
    panel.appendChild(applyButton);

    const presetsLabel = document.createElement('label');
    presetsLabel.textContent = 'Presets:';
    presetsLabel.style.display = 'block';
    presetsLabel.style.marginTop = '10px';
    panel.appendChild(presetsLabel);

    const presetsSelect = document.createElement('select');
    presetsSelect.style.width = '100%';
    presetsSelect.style.padding = '5px';
    presetsSelect.style.marginTop = '5px';

    const presetOptions = [
        { name: 'Anime', bg: 'url(https://github.com/elixirsneededx/ChatGPT-Enhanced-Customizer-TamperMonkey-/blob/main/anime-preset.jpg)', color: '#ff00ff', font: 'Algerian' },
        { name: 'Slinky Style', bg: 'url(https://github.com/elixirsneededx/ChatGPT-Enhanced-Customizer-TamperMonkey-/blob/main/Slinky.gif)', color: '#00ffff', font: 'Comic Sans MS' },
        { name: 'Bluematrix Style', bg: 'url(https://github.com/elixirsneededx/ChatGPT-Enhanced-Customizer-TamperMonkey-/blob/main/Bluematrix.gif)', color: '#0000ff', font: 'Times New Roman' }
    ];

    presetOptions.forEach((preset) => {
        const option = document.createElement('option');
        option.value = preset.name;
        option.textContent = preset.name;
        presetsSelect.appendChild(option);
    });

    panel.appendChild(presetsSelect);

    presetsSelect.addEventListener('change', () => {
        const selectedPreset = presetOptions.find(preset => preset.name === presetsSelect.value);
        if (selectedPreset) {
            document.body.style.backgroundImage = selectedPreset.bg;
            document.body.style.color = selectedPreset.color;
            document.body.style.fontFamily = selectedPreset.font;
        }
    });

    const advancedSettings = document.createElement('h4');
    advancedSettings.textContent = 'UI Options';
    advancedSettings.style.marginTop = '15px';
    advancedSettings.style.color = '#ff00ff';
    panel.appendChild(advancedSettings);

    const transparencyLabel = document.createElement('label');
    transparencyLabel.textContent = 'UI Transparency:';
    transparencyLabel.style.display = 'block';
    transparencyLabel.style.marginTop = '5px';
    panel.appendChild(transparencyLabel);

    const transparencyInput = document.createElement('input');
    transparencyInput.type = 'range';
    transparencyInput.min = '0';
    transparencyInput.max = '100';
    transparencyInput.value = '85';
    transparencyInput.style.width = '100%';
    panel.appendChild(transparencyInput);

    transparencyInput.addEventListener('input', () => {
        panel.style.backgroundColor = `rgba(0, 0, 0, ${transparencyInput.value / 100})`;
    });

    const shapeLabel = document.createElement('label');
    shapeLabel.textContent = 'UI Shape:';
    shapeLabel.style.display = 'block';
    shapeLabel.style.marginTop = '5px';
    panel.appendChild(shapeLabel);

    const shapeSelect = document.createElement('select');
    shapeSelect.style.width = '100%';
    shapeSelect.style.padding = '5px';

    const shapeOptions = ['Square', 'Rounded', 'Circular'];
    shapeOptions.forEach((shape) => {
        const option = document.createElement('option');
        option.value = shape;
        option.textContent = shape;
        shapeSelect.appendChild(option);
    });

    panel.appendChild(shapeSelect);

    shapeSelect.addEventListener('change', () => {
        if (shapeSelect.value === 'Square') {
            panel.style.borderRadius = '0px';
        } else if (shapeSelect.value === 'Rounded') {
            panel.style.borderRadius = '12px';
        } else if (shapeSelect.value === 'Circular') {
            panel.style.borderRadius = '50%';
        }
    });

    const languageLabel = document.createElement('label');
    languageLabel.textContent = 'Localization:';
    languageLabel.style.display = 'block';
    languageLabel.style.marginTop = '5px';
    panel.appendChild(languageLabel);

    const languageSelect = document.createElement('select');
    languageSelect.style.width = '100%';
    languageSelect.style.padding = '5px';

    const languageOptions = ['English', 'Spanish', 'French', 'German', 'Japanese'];
    languageOptions.forEach((lang) => {
        const option = document.createElement('option');
        option.value = lang;
        option.textContent = lang;
        languageSelect.appendChild(option);
    });

    panel.appendChild(languageSelect);

    languageSelect.addEventListener('change', () => {
        if (languageSelect.value === 'Spanish') {
            title.textContent = 'Personalizador Mejorado de ChatGPT';
            applyButton.textContent = 'Aplicar';
            closeButton.textContent = 'Cerrar';
            presetsLabel.textContent = 'Preajustes:';
        } else if (languageSelect.value === 'French') {
            title.textContent = 'Personnalisateur Amélioré ChatGPT';
            applyButton.textContent = 'Appliquer';
            closeButton.textContent = 'Fermer';
            presetsLabel.textContent = 'Préréglages:';
        } else if (languageSelect.value === 'German') {
            title.textContent = 'Erweiterter ChatGPT-Anpasser';
            applyButton.textContent = 'Anwenden';
            closeButton.textContent = 'Schließen';
            presetsLabel.textContent = 'Voreinstellungen:';
        } else if (languageSelect.value === 'Japanese') {
            title.textContent = 'ChatGPTカスタマイザー';
            applyButton.textContent = '適用';
            closeButton.textContent = '閉じる';
            presetsLabel.textContent = 'プリセット:';
        } else {
            title.textContent = 'ChatGPT Enhanced Customizer';
            applyButton.textContent = 'Apply';
            closeButton.textContent = 'X';
            presetsLabel.textContent = 'Presets:';
        }
    });

    const backupButton = document.createElement('button');
    backupButton.textContent = 'Backup Settings';
    backupButton.style.display = 'block';
    backupButton.style.marginTop = '10px';
    backupButton.style.width = '100%';
    backupButton.style.backgroundColor = '#ff00ff';
    backupButton.style.color = 'white';
    backupButton.style.padding = '10px';
    backupButton.style.border = 'none';
    backupButton.style.cursor = 'pointer';
    backupButton.style.fontSize = '16px';
    backupButton.style.borderRadius = '4px';
    backupButton.addEventListener('click', () => {
        const settings = {
            UITextColor: UITextColorInput.value,
            backgroundColor: backgroundColorInput.value,
            font: fontSelect.value,
            chatFontSize: chatFontSizeInput.value,
            transparency: transparencyInput.value,
            shape: shapeSelect.value,
            language: languageSelect.value
        };
        localStorage.setItem('chatgpt-enhanced-settings', JSON.stringify(settings));
        alert('Settings have been backed up.');
    });
    panel.appendChild(backupButton);

    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset to Default';
    resetButton.style.display = 'block';
    resetButton.style.marginTop = '10px';
    resetButton.style.width = '100%';
    resetButton.style.backgroundColor = '#ff00ff';
    resetButton.style.color = 'white';
    resetButton.style.padding = '10px';
    resetButton.style.border = 'none';
    resetButton.style.cursor = 'pointer';
    resetButton.style.fontSize = '16px';
    resetButton.style.borderRadius = '4px';
    resetButton.addEventListener('click', () => {
        localStorage.removeItem('chatgpt-enhanced-settings');
        location.reload();
    });
    panel.appendChild(resetButton);

    const savedSettings = localStorage.getItem('chatgpt-enhanced-settings');
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        UITextColorInput.value = settings.UITextColor;
        backgroundColorInput.value = settings.backgroundColor;
        fontSelect.value = settings.font;
        chatFontSizeInput.value = settings.chatFontSize;
        transparencyInput.value = settings.transparency;
        shapeSelect.value = settings.shape;
        languageSelect.value = settings.language;
        applyButton.click();
    }
})();
