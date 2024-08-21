// ==UserScript==
// @name         ChatGPT Enhanced Customizer (2.0)
// @namespace    https://github.com/elixirsneededx/ChatGPT-Enhanced-Customizer-TamperMonkey-
// @version      2.0
// @description  Customize ChatGPT with advanced background, UI styling, text controls, and presets
// @license            MIT
// @copyright          2024, elixirsneededx (https://github.com/elixirsneededx) @elixirsneededx on discord.
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAH1UExURUxpcXeqn3WqnHWonHSpnHWonHWpnG22knWpnHWpnHSmm3apm3SpnHWonHWpnHSonHWpnHWpm3apnXWpnHWpm3WpnP///8fc19fm43mrn67Nxf7///r8+6HFvNPk4JS8ssXb1XirnsDY0sPa1Pj7+qbHv5i/tXeqnvz9/X6uoo65roq2q+Tu7P3+/qrKwqDEu9bm4vP39qfIwPv9/NXl4ezz8Xqsn+nx73msn5/Dusnd2N7q59zp5pC6r4CwpKLFvIOxpszf2oSypsTa1fn7+/P49t/r6JrAt8LZ1L/X0d3q53aqnczf287h3Ie0qc7g3Pr8/LTQybDOxpvBuObv7c/h3PX5+Ory8ODr6OPt65G7sLnTzYWzp/n7+oi1qv7+/tTk4J7Cucve2Z3Cub7X0H+vo8LZ053CuKnJwff6+tnn4/3+/fD29XytoYWzqJe+tJa+tHapnHeqnaHEu8vf2oGxpazLw3utoMre2ZW9s7XRyu/19H2uou/186XHv6jJwNDi3sjd2OLt6u308ufw7tfm4rjTzK3MxOjw7tvp5dHi3sjd15m/tvL39q/Nxvb5+OPu64y3rIOyptnn5LbSy+Ds6eHs6tbl4cHZ0/v8/H6vo4GwpZ7Dus/h3fb6+ZK7sfT49/f6+aLFvavLw6zLxM3g28bc1pQLf2QAAAAVdFJOUwAtv5bz1PQH/dUuj5WQ/CyYwJHykqKEGP8AAAAJcEhZcwAAAHYAAAB2AU57JggAAAIcSURBVDjLhdNle9swEABgFdK0Kw7uHMfp6iTeAksaThpoUmZuV1x5zMxbx8wM7Xj7nZNjx/L2rNl9kXR6H51snwmhsWFTWQn8FSWGygKihLGmFP4ZpUXG7P5GWDcKZVEDeaKC1mfnHxUvoSV19YQOVFWTLdpiUfJ2POx/jOEzAy4tWU7KctPG95FpOjT0IA2PT80aSHEOpKQ5mSUxIA7bD2OzI5vdTNTt1QXBDvAxMT/7qkE+h8PdyoYC+DX0YgYyX4W+FwBunqYOhpp0YAl/1eN22Or5DPD8Jd6sBTiOZgYa8SfUysAMH+wWW/AK3ndbUWRADKUVMGIex1YrRGcs3uvYxcCzKVCAJTb66FZsFGDXTgHPMjD2WgWcFeCkHd/uoOshj0MD16QoLOI2+Q406ifpPXh4gisaOIXD4JiZXUoqwARx/Ab80zB7TJMzmK17nr4BK2eCOnocJGMMBBH9tO6FqYhveUJSwZsxBrpRDDltl6G3G7/8+K6AtLOZARu65hYwcLfL8s4l30EGCTzGwH6MA3Tew9u0Tp1HBmYOT+u+xZ62nl4AB91uGRQ+ZWAZ53HQqgMwgn3n6BC90+bl0nLJB51qH+QaphUD3EWuHVNuuhiQwlrPaS3n6zhEW+2G3I3TkSE3A5XalG860o/j/sSkcGAf62tS8MdvFfe3Oyf2tugyhBRB3qC/XuF/ADFWVOUHhFSXG4rXA78BYbiLJDUXqsMAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII=
// @author       @elixirsneededx on discord
// @match        http*://chat.openai.com/*
// @match        http*://chatgpt.com/*
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
    reopenButton.src = 'https://raw.githubusercontent.com/elixirsneededx/ChatGPT-Enhanced-Customizer-TamperMonkey-/main/GPT.gif';
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
