// ==UserScript==
// @name         ChatGPT Enhanced Customizer
// @namespace    https://github.com/elixirsneededx/ChatGPT-Enhanced-Customizer-TamperMonkey-
// @version      2.5
// @description  Customize ChatGPT with advanced background, UI styling, text controls, and presets
// @license            MIT
// @copyright          2024, elixirsneededx (https://github.com/elixirsneededx) @elixirsneededx on discord.
// @icon         https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F232811155392726%2Fmembers%2F&psig=AOvVaw226fltKKine9LrE_8JL9eA&ust=1724383343243000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLDbwtfSh4gDFQAAAAAdAAAAABAE
// @author       @elixirsneededx on discord
// @match        http*://chat.openai.com/*
// @match        http*://chatgpt.com/*
// @connect      https://greasyfork.org
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

    const fonts = ['Arial', 'Courier New', 'Georgia', 'Tahoma', 'Verdana', 'Comic Sans MS', 'Times New Roman', 'Trebuchet MS', 'Lucida Console', 'Algerian'];
    fonts.forEach(font => {
        const option = document.createElement('option');
        option.value = font;
        option.textContent = font;
        fontSelect.appendChild(option);
    });
    panel.appendChild(fontSelect);

    const fileLabel = document.createElement('label');
    fileLabel.textContent = 'Custom Background:';
    fileLabel.style.display = 'block';
    fileLabel.style.marginTop = '10px';
    panel.appendChild(fileLabel);

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.mp4,.mp3,.gif,.png,.jpeg,.jpg';
    panel.appendChild(fileInput);

    const presetLabel = document.createElement('label');
    presetLabel.textContent = 'Presets:';
    presetLabel.style.display = 'block';
    presetLabel.style.marginTop = '10px';
    panel.appendChild(presetLabel);

    const presetSelect = document.createElement('select');
    presetSelect.style.backgroundColor = 'black';
    presetSelect.style.color = 'white';
    presetSelect.style.border = '1px solid #ffffff';
    presetSelect.style.padding = '5px';
    presetSelect.style.width = '100%';
    presetSelect.style.borderRadius = '4px';
    presetSelect.style.fontFamily = 'Arial, sans-serif';

    const presets = ['Select a Preset', 'Anime Style', 'Slinky Style', 'Bluematrix Style'];
    presets.forEach(preset => {
        const option = document.createElement('option');
        option.value = preset;
        option.textContent = preset;
        presetSelect.appendChild(option);
    });
    panel.appendChild(presetSelect);

    const credits = document.createElement('p');
    credits.textContent = '@elixirsneededx on Discord - main developer, @jokeysalt on Discord - presets/designer';
    credits.style.marginTop = '20px';
    credits.style.textAlign = 'center';
    credits.style.fontSize = '12px';
    credits.style.color = '#ff00ff';
    panel.appendChild(credits);

    document.body.appendChild(panel);

    const reopenButton = document.createElement('img');
    reopenButton.src = '://https://github.com/elixirsneededx/ChatGPT-Enhanced-Customizer-TamperMonkey-/blob/main/GPT.gif';
    reopenButton.style.position = 'fixed';
    reopenButton.style.bottom = '10px';
    reopenButton.style.right = '10px';
    reopenButton.style.width = '50px';
    reopenButton.style.height = '50px';
    reopenButton.style.cursor = 'pointer';
    reopenButton.style.display = 'none';
    reopenButton.style.zIndex = '9998';
    reopenButton.addEventListener('click', () => {
        panel.style.display = 'block';
        reopenButton.style.display = 'none';
    });
    document.body.appendChild(reopenButton);

    function updateUITextColor() {
        panel.style.color = UITextColorInput.value;
        closeButton.style.color = UITextColorInput.value;
        fontSelect.style.color = UITextColorInput.value;
        fontSelect.style.border = `1px solid ${UITextColorInput.value}`;
    }

    function updateBackgroundColor() {
        document.body.style.backgroundColor = backgroundColorInput.value;
    }

    function applyCustomBackground(file) {
        const chatArea = document.querySelector('main');
        if (!chatArea) return;

        const fileURL = URL.createObjectURL(file);

        if (file.type.includes('video') || file.type.includes('audio')) {
            chatArea.innerHTML = `<video autoplay loop muted style="position: absolute; width: 100%; height: 100%; object-fit: cover;"><source src="${fileURL}" type="${file.type}"></video>`;
        } else if (file.type.includes('image')) {
            chatArea.style.backgroundImage = `url(${fileURL})`;
            chatArea.style.backgroundSize = 'cover';
            chatArea.style.backgroundPosition = 'center';
        }
    }

    function applyPreset(name) {
        if (name === 'Anime Style') {
            document.body.style.backgroundImage = 'url(https://raw.githubusercontent.com/elixirsneededx/ChatGPT-Enhanced-Customizer-TamperMonkey-/main/anime-preset.jpg)';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            UITextColorInput.value = '#ff1493';
            fontSelect.value = 'Algerian';
            document.body.style.fontFamily = 'Algerian';
        } else if (name === 'Slinky Style') {
            document.body.style.backgroundImage = 'url(https://raw.githubusercontent.com/elixirsneededx/ChatGPT-Enhanced-Customizer-TamperMonkey-/main/slinky-preset.gif)';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            UITextColorInput.value = '#00ffff';
            fontSelect.value = 'Comic Sans MS';
            document.body.style.fontFamily = 'Comic Sans MS';
        } else if (name === 'Bluematrix Style') {
            document.body.style.backgroundImage = 'url(https://raw.githubusercontent.com/elixirsneededx/ChatGPT-Enhanced-Customizer-TamperMonkey-/main/bluematrix-preset.gif)';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            UITextColorInput.value = '#00008b';
            fontSelect.value = 'Times New Roman';
            document.body.style.fontFamily = 'Times New Roman';
        }
        updateUITextColor();
    }

    UITextColorInput.addEventListener('input', updateUITextColor);
    backgroundColorInput.addEventListener('input', updateBackgroundColor);
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
            applyCustomBackground(fileInput.files[0]);
        }
    });
    fontSelect.addEventListener('change', () => {
        document.body.style.fontFamily = fontSelect.value;
    });
    presetSelect.addEventListener('change', () => {
        applyPreset(presetSelect.value);
    });

    updateUITextColor();
    updateBackgroundColor();
})();
