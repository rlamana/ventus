define([
	'$',
	'underscore',
	'backbone',
	'collections/todos',
	'views/todos',
	'common'
], function( $, _, Backbone, Todos, TodoView, Common ) {

	var AppView = Backbone.View.extend({
		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '.todo-app',

		// Delegated events for creating new items, and clearing completed ones.
		events: {
			'keypress .todo-app-new': 'createOnEnter',
			'click .todo-app-toggle-all': 'toggleAllComplete'
		},

		// At initialization we bind to the relevant events on the `Todos`
		// collection, when items are added or changed. Kick things off by
		// loading any preexisting todos that might be saved in *localStorage*.
		initialize: function() {
			this.input = this.$('.todo-app-new');
			this.allCheckbox = this.$('.todo-app-toggle-all')[0];
			this.$main = this.$('.todo-app-main');

			Todos.on( 'add', this.addOne, this );
			Todos.on( 'reset', this.addAll, this );
			Todos.on( 'change:completed', this.filterOne, this );
			Todos.on( "filter", this.filterAll, this);
			Todos.on( 'all', this.render, this );

			Todos.fetch();
		},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function() {
			var completed = Todos.completed().length;
			var remaining = Todos.remaining().length;

			if ( Todos.length ) {
				this.$main.show();
			} else {
				this.$main.hide();
			}

			this.allCheckbox.checked = !remaining;
		},

		// Add a single todo item to the list by creating a view for it, and
		// appending its element to the `<ul>`.
		addOne: function( todo ) {
			var view = new TodoView({ model: todo });
			$('.todo-list').append( view.render().el );
		},

		// Add all items in the **Todos** collection at once.
		addAll: function() {
			this.$('.todo-list').html('');
			Todos.each(this.addOne, this);
		},

		filterOne : function (todo) {
			todo.trigger("visible");
		},

		filterAll : function () {
			Todos.each(this.filterOne, this);
		},

		// Generate the attributes for a new Todo item.
		newAttributes: function() {
			return {
				title: this.input.val().trim(),
				order: Todos.nextOrder(),
				completed: false
			};
		},

		// If you hit return in the main input field, create new **Todo** model,
		// persisting it to *localStorage*.
		createOnEnter: function( e ) {
			if ( e.which !== Common.ENTER_KEY || !this.input.val().trim() ) {
				return;
			}

			Todos.create( this.newAttributes() );
			this.input.val('');
		},

		// Clear all completed todo items, destroying their models.
		clearCompleted: function() {
			_.each( Todos.completed(), function( todo ) {
				todo.destroy();
			});

			return false;
		},

		toggleAllComplete: function() {
			var completed = this.allCheckbox.checked;

			Todos.each(function( todo ) {
				todo.save({
					'completed': completed
				});
			});
		}
	});

	return AppView;
});
