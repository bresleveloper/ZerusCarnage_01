import * as THREE from 'three';

/**
 * AudioManager - Manages background music and sound effects for the game
 * Uses THREE.js Audio API for spatial and global audio
 */
export class AudioManager {
	private listener: THREE.AudioListener;
	private backgroundMusic: THREE.Audio | null = null;
	private eatSound: THREE.Audio | null = null;
	private boneCrackSound: THREE.Audio | null = null;
	private eggCrackSound: THREE.Audio | null = null;
	private audioLoader: THREE.AudioLoader;

	constructor(camera: THREE.Camera) {
		// Create audio listener and attach to camera
		this.listener = new THREE.AudioListener();
		camera.add(this.listener);

		// Create audio loader
		this.audioLoader = new THREE.AudioLoader();
	}

	/**
	 * Load and play background music
	 * @param path Path to the audio file
	 * @param volume Volume level (0.0 to 1.0)
	 * @param loop Whether to loop the audio
	 */
	loadBackgroundMusic(path: string, volume: number = 0.15, loop: boolean = true): void {
		// Create audio object
		this.backgroundMusic = new THREE.Audio(this.listener);

		// Load audio file
		this.audioLoader.load(
			path,
			(buffer) => {
				if (this.backgroundMusic) {
					this.backgroundMusic.setBuffer(buffer);
					this.backgroundMusic.setLoop(loop);
					this.backgroundMusic.setVolume(volume);

					// Check if AudioContext is suspended (browser autoplay policy)
					if (this.listener.context.state === 'suspended') {
						console.warn('AudioContext is suspended. Audio will start on user interaction.');
						this.resumeAudioContextOnInteraction();
					} else {
						// AudioContext is running, play immediately
						this.backgroundMusic.play();
						console.log(`Background music loaded and playing: ${path} at ${volume * 100}% volume`);
					}
				}
			},
			(progress) => {
				// Optional: Handle loading progress
				const percentComplete = (progress.loaded / progress.total) * 100;
				console.log(`Loading audio: ${percentComplete.toFixed(0)}%`);
			},
			(error) => {
				console.error('Error loading background music:', error);
			}
		);
	}

	/**
	 * Load a sound effect (preload for instant playback)
	 * @param path Path to the audio file
	 * @param volume Volume level (0.0 to 1.0)
	 */
	loadEatSound(path: string, volume: number = 0.5): void {
		// Create audio object for eating sound
		this.eatSound = new THREE.Audio(this.listener);

		// Load audio file
		this.audioLoader.load(
			path,
			(buffer) => {
				if (this.eatSound) {
					this.eatSound.setBuffer(buffer);
					this.eatSound.setLoop(false);
					this.eatSound.setVolume(volume);
					console.log(`Eat sound effect loaded at ${volume * 100}% volume`);
				}
			},
			undefined,
			(error) => {
				console.error('Error loading eat sound effect:', error);
			}
		);
	}

	/**
	 * Play the eating sound effect
	 */
	playEatSound(): void {
		if (this.eatSound && this.eatSound.buffer) {
			// Check if AudioContext is suspended
			if (this.listener.context.state === 'suspended') {
				// Try to resume context first
				this.listener.context.resume().then(() => {
					if (this.eatSound && !this.eatSound.isPlaying) {
						this.eatSound.play();
					}
				});
			} else {
				// Stop if already playing (to allow rapid repeated plays)
				if (this.eatSound.isPlaying) {
					this.eatSound.stop();
				}
				this.eatSound.play();
			}
		}
	}

	/**
	 * Load bone crack sound effect (preload for instant playback)
	 * @param path Path to the audio file
	 * @param volume Volume level (0.0 to 1.0)
	 */
	loadBoneCrackSound(path: string, volume: number = 0.5): void {
		// Create audio object for bone crack sound
		this.boneCrackSound = new THREE.Audio(this.listener);

		// Load audio file
		this.audioLoader.load(
			path,
			(buffer) => {
				if (this.boneCrackSound) {
					this.boneCrackSound.setBuffer(buffer);
					this.boneCrackSound.setLoop(false);
					this.boneCrackSound.setVolume(volume);
					console.log(`Bone crack sound effect loaded at ${volume * 100}% volume`);
				}
			},
			undefined,
			(error) => {
				console.error('Error loading bone crack sound effect:', error);
			}
		);
	}

	/**
	 * Play the bone crack sound effect (for eating enemies)
	 */
	playBoneCrackSound(): void {
		if (this.boneCrackSound && this.boneCrackSound.buffer) {
			// Check if AudioContext is suspended
			if (this.listener.context.state === 'suspended') {
				// Try to resume context first
				this.listener.context.resume().then(() => {
					if (this.boneCrackSound && !this.boneCrackSound.isPlaying) {
						this.boneCrackSound.play();
					}
				});
			} else {
				// Stop if already playing (to allow rapid repeated plays)
				if (this.boneCrackSound.isPlaying) {
					this.boneCrackSound.stop();
				}
				this.boneCrackSound.play();
			}
		}
	}

	/**
	 * Load egg cracking sound effect (preload for instant playback)
	 * @param path Path to the audio file
	 * @param volume Volume level (0.0 to 1.0)
	 */
	loadEggCrackSound(path: string, volume: number = 0.5): void {
		// Create audio object for egg crack sound
		this.eggCrackSound = new THREE.Audio(this.listener);

		// Load audio file
		this.audioLoader.load(
			path,
			(buffer) => {
				if (this.eggCrackSound) {
					this.eggCrackSound.setBuffer(buffer);
					this.eggCrackSound.setLoop(false);
					this.eggCrackSound.setVolume(volume);
					console.log(`Egg crack sound effect loaded at ${volume * 100}% volume`);
				}
			},
			undefined,
			(error) => {
				console.error('Error loading egg crack sound effect:', error);
			}
		);
	}

	/**
	 * Play the egg cracking sound effect (for morphing into egg)
	 */
	playEggCrackSound(): void {
		if (this.eggCrackSound && this.eggCrackSound.buffer) {
			// Check if AudioContext is suspended
			if (this.listener.context.state === 'suspended') {
				// Try to resume context first
				this.listener.context.resume().then(() => {
					if (this.eggCrackSound && !this.eggCrackSound.isPlaying) {
						this.eggCrackSound.play();
					}
				});
			} else {
				// Stop if already playing (to allow rapid repeated plays)
				if (this.eggCrackSound.isPlaying) {
					this.eggCrackSound.stop();
				}
				this.eggCrackSound.play();
			}
		}
	}

	/**
	 * Stop background music
	 */
	stopBackgroundMusic(): void {
		if (this.backgroundMusic && this.backgroundMusic.isPlaying) {
			this.backgroundMusic.stop();
		}
	}

	/**
	 * Pause background music
	 */
	pauseBackgroundMusic(): void {
		if (this.backgroundMusic && this.backgroundMusic.isPlaying) {
			this.backgroundMusic.pause();
		}
	}

	/**
	 * Resume background music
	 */
	resumeBackgroundMusic(): void {
		if (this.backgroundMusic && !this.backgroundMusic.isPlaying) {
			this.backgroundMusic.play();
		}
	}

	/**
	 * Set background music volume
	 * @param volume Volume level (0.0 to 1.0)
	 */
	setVolume(volume: number): void {
		if (this.backgroundMusic) {
			this.backgroundMusic.setVolume(Math.max(0, Math.min(1, volume)));
		}
	}

	/**
	 * Resume AudioContext on user interaction (required for browser autoplay policy)
	 */
	private resumeAudioContextOnInteraction(): void {
		const resumeAudio = () => {
			if (this.listener.context.state === 'suspended') {
				this.listener.context.resume().then(() => {
					console.log('AudioContext resumed. Starting background music.');
					if (this.backgroundMusic && !this.backgroundMusic.isPlaying) {
						this.backgroundMusic.play();
					}
				});
			}
		};

		// Listen for any user interaction
		document.addEventListener('click', resumeAudio, { once: true });
		document.addEventListener('keydown', resumeAudio, { once: true });
	}

	/**
	 * Clean up audio resources
	 */
	dispose(): void {
		// Stop and disconnect background music
		if (this.backgroundMusic) {
			if (this.backgroundMusic.isPlaying) {
				this.backgroundMusic.stop();
			}
			this.backgroundMusic.disconnect();
			this.backgroundMusic = null;
		}

		// Stop and disconnect eat sound
		if (this.eatSound) {
			if (this.eatSound.isPlaying) {
				this.eatSound.stop();
			}
			this.eatSound.disconnect();
			this.eatSound = null;
		}

		// Stop and disconnect bone crack sound
		if (this.boneCrackSound) {
			if (this.boneCrackSound.isPlaying) {
				this.boneCrackSound.stop();
			}
			this.boneCrackSound.disconnect();
			this.boneCrackSound = null;
		}

		// Stop and disconnect egg crack sound
		if (this.eggCrackSound) {
			if (this.eggCrackSound.isPlaying) {
				this.eggCrackSound.stop();
			}
			this.eggCrackSound.disconnect();
			this.eggCrackSound = null;
		}

		// Remove listener from parent (camera)
		if (this.listener.parent) {
			this.listener.parent.remove(this.listener);
		}

		console.log('AudioManager disposed');
	}
}