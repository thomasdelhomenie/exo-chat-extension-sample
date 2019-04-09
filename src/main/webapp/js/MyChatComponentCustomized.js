import ExoModalCustomized from './ExoModalCustomized.vue';

requirejs(['SHARED/extensionRegistry'], function(extensionRegistry) {
  extensionRegistry.registerComponent('chat', 'exo-modal', ExoModalCustomized);
});
