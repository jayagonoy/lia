// Input all of the ordinances here

	var ord1 = '<div class="uk-panel"><div class="uk-panel-title">Ordinance # 2012</div><strong>An ordinance regarding an implementation of an ordinance</strong><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p><i>Penalties: Php 1231.20</i></div>';
	
	var ord2 = '<div class="uk-panel"><div class="uk-panel-badge uk-badge">New</div><div class="uk-panel-title">Ordinance # 2012</div><strong>An ordinance regarding an implementation of an ordinance</strong><p>Penalties: Php 1231.20</p></div>';
	
	var ord3 = '<div class="uk-panel"><div class="uk-panel-badge uk-badge">New</div><div class="uk-panel-title">Ordinance # 2012</div><strong>An ordinance regarding an implementation of an ordinance</strong><p>Penalties: Php 1231.20</p></div>'

// Write the ordinances into the 'Latest Orinances' sidebar
	
	with (document) {
		write(ord1);
		write(ord2);
		write(ord3);
	}
	
