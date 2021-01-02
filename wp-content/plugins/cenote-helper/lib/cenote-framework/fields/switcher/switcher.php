<?php if (! defined('ABSPATH')) { die; } // Cannot access pages directly.
/**
 *
 * Field: Switcher
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */
class CENOTEFramework_Option_switcher extends CENOTEFramework_Options {

  public function __construct($field, $value = '', $unique = '') {
    parent::__construct($field, $value, $unique);
  }

  public function output() {

    echo $this->element_before();
    $label = (isset($this->field['label'])) ? '<div class="cenote-text-desc">'. $this->field['label'] . '</div>' : '';
    echo '<label><input type="checkbox" name="'. $this->element_name() .'" value="1"'. $this->element_class() . $this->element_attributes() . checked($this->element_value(), 1, false) .'/><em data-on="'. __('on', 'cenote-helper') .'" data-off="'. __('off', 'cenote-helper') .'"></em><span></span></label>' . $label;
    echo $this->element_after();

  }

}
