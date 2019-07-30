import checkPropTypes from 'check-prop-types'; 

export const findByTest = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}; 

export const checkProps = (component, comformProps) => {
    const propError = checkPropTypes(component.propTypes, comformProps, 'prop', component.name);
    expect(propError).toBeUndefined();
};
