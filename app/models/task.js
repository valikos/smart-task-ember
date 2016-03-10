import DS from 'ember-data';

export default DS.Model.extend({
  title:       DS.attr('string'),
  completed:   DS.attr('boolean'),
  // description: DS.attr('string'),
  project:     DS.belongsTo('project')
});
