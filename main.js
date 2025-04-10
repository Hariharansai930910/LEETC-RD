document.addEventListener('DOMContentLoaded', function() {
  // For debugging purposes
  document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM fully loaded");
  console.log("Question tab found:", !!document.getElementById('question-tab'));
  console.log("Hint tab found:", !!document.getElementById('hint-tab'));
  console.log("One-liner tab found:", !!document.getElementById('one-liner-tab'));
  
  // Your existing code continues here...
});
  console.log("DOM fully loaded and parsed");
  
  // DOM elements
  const topicSection = document.getElementById('topic-section');
  const topicGrid = document.getElementById('topic-grid');
  const flashcardSection = document.getElementById('flashcard-section');
  const backButton = document.getElementById('back-button');
  const currentTopic = document.getElementById('current-topic');
  const problemCounter = document.getElementById('problem-counter');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  const flashcard = document.getElementById('flashcard');
  
  // State variables
  let selectedTopicId = null;
  let currentProblemIndex = 0;

  // Populate topics
  function populateTopics() {
    console.log("Populating topics...");
    topicGrid.innerHTML = '';
    
    topics.forEach(topic => {
      const problemCount = problems[topic.id] ? problems[topic.id].length : 0;
      const status = problemCount > 0 ? `${problemCount} problems` : 'Coming soon';
      
      const card = document.createElement('div');
      card.className = 'bg-white hover:bg-blue-50 border border-gray-200 rounded-lg p-4 shadow-sm transition-colors';
      card.innerHTML = `
        <h3 class="font-medium text-gray-900">${topic.name}</h3>
        <p class="text-gray-500 text-sm mt-1">${status}</p>
      `;
      
      if (problemCount > 0) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => selectTopic(topic.id));
      } else {
        card.classList.add('opacity-60');
        card.style.cursor = 'not-allowed';
      }
      
      topicGrid.appendChild(card);
    });
  }

  // Select a topic
  function selectTopic(topicId) {
    selectedTopicId = topicId;
    currentProblemIndex = 0;

    // Hide topic section and show flashcard section
    document.getElementById('topic-section').classList.add('hidden');
    document.getElementById('flashcard-section').classList.remove('hidden');
     
    topicSection.classList.add('hidden');
    flashcardSection.classList.remove('hidden');
    
    const topic = topics.find(t => t.id === topicId);
    currentTopic.textContent = topic.name;
    
    loadProblem();
  }
  // Back button functionality
   document.getElementById('back-button').addEventListener('click', () => {
   document.getElementById('flashcard-section').classList.add('hidden');
   document.getElementById('topic-section').classList.remove('hidden');
   });

  // Load current problem
  function loadProblem() {
    console.log("Loading problem...");
    const currentProblems = problems[selectedTopicId];
    const problem = currentProblems[currentProblemIndex];
    
    // Update counter and navigation
    problemCounter.textContent = `Problem ${currentProblemIndex + 1} of ${currentProblems.length}`;
    prevButton.disabled = currentProblemIndex === 0;
    nextButton.disabled = currentProblemIndex === currentProblems.length - 1;
    
    // Reset card state
    flashcard.classList.remove('flipped');
    
    // Update front of card
    document.getElementById('card-title').textContent = problem.title;
    document.getElementById('card-title-back').textContent = `${problem.title} - Solution`;
    
    // Set difficulty badge
    const difficultyBadge = document.getElementById('card-difficulty');
    difficultyBadge.textContent = problem.difficulty;
    difficultyBadge.className = 'px-2 py-1 rounded-full text-xs font-semibold text-white';
    
    if (problem.difficulty === 'Easy') {
      difficultyBadge.classList.add('bg-green-500');
    } else if (problem.difficulty === 'Medium') {
      difficultyBadge.classList.add('bg-yellow-500');
    } else {
      difficultyBadge.classList.add('bg-red-500');
    }
    
    // Update content
    document.getElementById('question-content').textContent = problem.question;
    document.getElementById('hint-content').textContent = problem.hint;
    
    // Update solution content
    document.getElementById('one-liner-content').textContent = problem.oneLiner;
    document.getElementById('three-liner-content').textContent = problem.threeLiner;
    document.getElementById('mnemonic-content').textContent = problem.mnemonic;
    document.getElementById('code-block').textContent = problem.code;
    
    // Reset tabs
    document.getElementById('question-tab').click();
    document.getElementById('one-liner-tab').click();
  }

  // Event listeners
  backButton.addEventListener('click', () => {
    flashcardSection.classList.add('hidden');
    topicSection.classList.remove('hidden');
  });
  
  prevButton.addEventListener('click', () => {
    if (currentProblemIndex > 0) {
      currentProblemIndex--;
      loadProblem();
    }
  });
  
  nextButton.addEventListener('click', () => {
    if (currentProblemIndex < problems[selectedTopicId].length - 1) {
      currentProblemIndex++;
      loadProblem();
    }
  });
  
  // Tab switching - front
  document.getElementById('question-tab').addEventListener('click', () => {
    document.getElementById('question-tab').classList.add('border-blue-500', 'text-blue-600');
    document.getElementById('hint-tab').classList.remove('border-blue-500', 'text-blue-600');
    document.getElementById('question-content').classList.remove('hidden');
    document.getElementById('hint-content').classList.add('hidden');
  });
  
  document.getElementById('hint-tab').addEventListener('click', () => {
    document.getElementById('hint-tab').classList.add('border-blue-500', 'text-blue-600');
    document.getElementById('question-tab').classList.remove('border-blue-500', 'text-blue-600');
    document.getElementById('hint-content').classList.remove('hidden');
    document.getElementById('question-content').classList.add('hidden');
  });
  
  // Tab switching - back
  document.getElementById('one-liner-tab').addEventListener('click', () => {
    document.getElementById('one-liner-tab').classList.add('border-blue-300', 'text-blue-300');
    document.getElementById('three-liner-tab').classList.remove('border-blue-300', 'text-blue-300');
    document.getElementById('mnemonic-tab').classList.remove('border-blue-300', 'text-blue-300');
    document.getElementById('code-tab').classList.remove('border-blue-300', 'text-blue-300');
    document.getElementById('one-liner-content').classList.remove('hidden');
    document.getElementById('three-liner-content').classList.add('hidden');
    document.getElementById('mnemonic-content').classList.add('hidden');
    document.getElementById('code-content').classList.add('hidden');
  });
  
  document.getElementById('three-liner-tab').addEventListener('click', () => {
    document.getElementById('three-liner-tab').classList.add('border-blue-300', 'text-blue-300');
    document.getElementById('one-liner-tab').classList.remove('border-blue-300', 'text-blue-300');
    document.getElementById('mnemonic-tab').classList.remove('border-blue-300', 'text-blue-300');
    document.getElementById('code-tab').classList.remove('border-blue-300', 'text-blue-300');
    document.getElementById('three-liner-content').classList.remove('hidden');
    document.getElementById('one-liner-content').classList.add('hidden');
    document.getElementById('mnemonic-content').classList.add('hidden');
    document.getElementById('code-content').classList.add('hidden');
  });
  
  document.getElementById('mnemonic-tab').addEventListener('click', () => {
    document.getElementById('mnemonic-tab').classList.add('border-blue-300', 'text-blue-300');
    document.getElementById('one-liner-tab').classList.remove('border-blue-300', 'text-blue-300');
    document.getElementById('three-liner-tab').classList.remove('border-blue-300', 'text-blue-300');
    document.getElementById('code-tab').classList.remove('border-blue-300', 'text-blue-300');
    document.getElementById('mnemonic-content').classList.remove('hidden');
    document.getElementById('one-liner-content').classList.add('hidden');
    document.getElementById('three-liner-content').classList.add('hidden');
    document.getElementById('code-content').classList.add('hidden');
  });
  
  document.getElementById('code-tab').addEventListener('click', () => {
    document.getElementById('code-tab').classList.add('border-blue-300', 'text-blue-300');
    document.getElementById('one-liner-tab').classList.remove('border-blue-300', 'text-blue-300');
    document.getElementById('three-liner-tab').classList.remove('border-blue-300', 'text-blue-300');
    document.getElementById('mnemonic-tab').classList.remove('border-blue-300', 'text-blue-300');
    document.getElementById('code-content').classList.remove('hidden');
    document.getElementById('one-liner-content').classList.add('hidden');
    document.getElementById('three-liner-content').classList.add('hidden');
    document.getElementById('mnemonic-content').classList.add('hidden');
  });
  
  // Card flipping
  const flashcard = document.getElementById('flashcard');
  if (flashcard) {
  flashcard.addEventListener('click', (e) => {
    // Don't flip when clicking tabs
    if (e.target.closest('button')) return;
    flashcard.classList.toggle('flipped');
    console.log('Card flipped'); // Add this for debugging
  });
 }

  // Initialize
  populateTopics();
});
