---
title: "Creating a CCK Field module with an \"invisible\" widget"
tags:
  - drupal
  - etherpad
date: "2010-11-19T00:14:48.000Z"
---

<snippet>

測試一下
125125125你好

````php
<?php
/**
 * Implementation of hook_widget().
 */
function etherpad_widget(&$form, &$form_state, $field, $items, $delta = 0) {
  $element['etherpad_url'] = array(
    '#type' => 'value',
    '#value' => (isset($items[$delta]['etherpad_url']) && !empty($form['nid']['#value'])) ? $items[$delta]['etherpad_url'] : $field['etherpad_url'] . etherpad_generate_padid($field['etherpad_url']),
  );
  $element['etherpad_text'] = array(
    '#type' => 'value',
    '#value' => (isset($items[$delta]['etherpad_text']) && !empty($form['nid']['#value'])) ? $items[$delta]['etherpad_text'] : "default value for now until we have a function to generate one",
  );
  $element['attributes'] = array(
    '#type' => 'value',
    '#value' => (isset($items[$delta]['attributes']) && !empty($form['nid']['#value'])) ? $items[$delta]['attributes'] : serialize($field['attributes']),
  );
  // Used so that hook_field('validate') knows where to
  // flag an error in deeply nested forms.
  if (empty($form['#parents'])) {
    $form['#parents'] = array();
  }
  $element['_error_element'] = array(
    '#type' => 'value',
    '#value' => implode('][', array_merge($form['#parents'], array('value'))),
  );

  return $element;
}
?>
````

</snippet>
